import { BookingAdditionalFees } from '../domain';
import { AnonymousListingDTO, AnonymousShopDTO } from '../interface/DTOs';

export type TotalTime = { 
  days: number;
  hours: number; 
};

export type RentalAndHourPrices = {
  rentalPrice: number;
  hourlyPrice: number;
};

/**
 * Calculates the total time between two dates in days and hours.
 * Note: use findTotalRentalTime if you want to round up to a whole day when exceeding a certain limit.
 * @param pickUpDate - The date when the rental starts.
 * @param returnDate - The date when the rental ends.
 * @returns An object containing the total days and hours.
 */
export function findTotalTime(pickUpDate: Date, returnDate: Date): TotalTime {
  const diff = returnDate.getTime() - pickUpDate.getTime();
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.ceil(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));  
  return { days, hours };
}

export function findTotalRentalTime(pickUpDate: Date, returnDate: Date, maximumRentalHours: number = 5): TotalTime {
  const totalTime = findTotalTime(pickUpDate, returnDate);
  if (totalTime.hours > maximumRentalHours) {
    totalTime.days += 1;
    totalTime.hours = 0;
  }
  return totalTime;
}

export function isDatesDiffLessThanOrEqual(date1: Date, date2: Date, value: TotalTime): boolean {
  const totalTime = findTotalTime(date1, date2);
  return totalTime.days < 0
  || (totalTime.days === 0 && totalTime.hours < 0) 
  || totalTime.days < value.days 
  || (totalTime.days === value.days && totalTime.hours <= value.hours);
}

export function findTotalRentalPrice(
  totalTime: TotalTime, 
  { 
    rentalPrice, 
    hourlyPrice 
  }: RentalAndHourPrices): number {
  return totalTime.days * rentalPrice + totalTime.hours * hourlyPrice;
}

export function findAdditionalFees({
  pickUpLocationId,
  returnLocationId,
  pickUpDate,
  returnDate,
}: {
  pickUpLocationId: string;
  returnLocationId: string;
  pickUpDate: Date;
  returnDate: Date;
}, listing: AnonymousListingDTO): BookingAdditionalFees {
  return {
    outOfFreeServiceAreaPickUp: listing.deliveryFees.find((deliveryFee) => deliveryFee.locationId === pickUpLocationId)?.fee || 0,
    outOfFreeServiceAreaReturn: listing.deliveryFees.find((deliveryFee) => deliveryFee.locationId === returnLocationId)?.fee || 0,
    ...findOutOfOperatingHoursFees(listing.shop, pickUpDate, returnDate)
  }
}

export function findPriceDueAtPickup(booking: {
  totalPrice: number;
  insuranceDeposit: number;
  bookingDeposit: number;
  additionalFees?: BookingAdditionalFees;
}): number {
  return (
    booking.totalPrice
    + booking.insuranceDeposit
    + (booking.additionalFees?.outOfOperatingHoursPickUp || 0)
    + (booking.additionalFees?.outOfOperatingHoursReturn || 0)
    + (booking.additionalFees?.outOfFreeServiceAreaPickUp || 0)
    + (booking.additionalFees?.outOfFreeServiceAreaReturn || 0)
    - booking.bookingDeposit
  );
}

export function findOutOfOperatingHoursNearest(
  time: Date,
  operatingStart: Date,
  operatingEnd: Date
): { hours: number; to: 'start' | 'end' | null } {
  const HOUR = 3600000;

  // Anchor a time-of-day to the date part of `base`
  const anchor = (base: Date, timeOfDay: Date) => {
    const d = new Date(base);
    d.setHours(
      timeOfDay.getHours(),
      timeOfDay.getMinutes(),
      timeOfDay.getSeconds(),
      timeOfDay.getMilliseconds()
    );
    return d;
  };

  const addDays = (d: Date, days: number) => new Date(d.getTime() + days * 86400000);

  const t = time.getTime();
  const start = anchor(time, operatingStart);      // today's start
  const endRaw = anchor(time, operatingEnd);       // today's end (clock only)
  const overnight = start.getTime() > endRaw.getTime();
  const end = overnight ? addDays(endRaw, 1) : endRaw;   // normalize overnight to next day

  // Inside the operating window?
  const inside = overnight
    ? (t >= start.getTime() || t <= endRaw.getTime())    // e.g., 22:00–06:00
    : (t >= start.getTime() && t <= end.getTime());      // e.g., 07:00–22:00

  if (inside) return { hours: 0, to: null };

  // Outside: compute distance to the *next* start and the *previous* end, pick the nearer
  const nextStart = t < start.getTime() ? start.getTime() : addDays(start, 1).getTime();
  const prevEnd   = t > end.getTime()   ? end.getTime()   : addDays(end, -1).getTime();

  const distToStart = nextStart - t; // >= 0
  const distToEnd   = t - prevEnd;   // >= 0

  if (distToStart <= distToEnd) {
    return { hours: Math.ceil(distToStart / HOUR), to: 'start' };
  } else {
    return { hours: Math.ceil(distToEnd / HOUR), to: 'end' };
  }
}

export function findOutOfOperatingHoursFees(shop: AnonymousShopDTO | undefined, pickUpDate: Date, returnDate: Date): {
  outOfOperatingHoursPickUp: number;
  outOfOperatingHoursReturn: number;
}{
  if (!shop) return { 
    outOfOperatingHoursPickUp: 0, 
    outOfOperatingHoursReturn: 0 
  };

  const startTime = new Date(shop.operatingHoursStartTime);
  const endTime = new Date(shop.operatingHoursEndTime);

  let operatingHoursStart = new Date(pickUpDate);
  operatingHoursStart.setHours(startTime.getHours());
  operatingHoursStart.setMinutes(startTime.getMinutes());
  operatingHoursStart.setSeconds(startTime.getSeconds());
  let operatingHoursEnd = new Date(pickUpDate);
  operatingHoursEnd.setHours(endTime.getHours());
  operatingHoursEnd.setMinutes(endTime.getMinutes());
  operatingHoursEnd.setSeconds(endTime.getSeconds());
  const pickUpOutOfHours = findOutOfOperatingHoursNearest(pickUpDate, operatingHoursStart, operatingHoursEnd);

  operatingHoursStart = new Date(returnDate);
  operatingHoursStart.setHours(startTime.getHours());
  operatingHoursStart.setMinutes(startTime.getMinutes());
  operatingHoursStart.setSeconds(startTime.getSeconds());
  operatingHoursEnd = new Date(returnDate);
  operatingHoursEnd.setHours(endTime.getHours());
  operatingHoursEnd.setMinutes(endTime.getMinutes());
  operatingHoursEnd.setSeconds(endTime.getSeconds());
  const returnOutOfHours = findOutOfOperatingHoursNearest(returnDate, operatingHoursStart, operatingHoursEnd);

  const outOfOperatingHoursPickUp = pickUpOutOfHours.hours > 0 
    ? shop.afterHoursFees.find((fee) => ([pickUpOutOfHours.hours, undefined].includes(fee.offsetHours) && fee.type === (pickUpOutOfHours.to === 'start' ? 'before' : 'after'))) 
    : undefined 
  ;
  const outOfOperatingHoursReturn = returnOutOfHours.hours > 0 
    ? shop.afterHoursFees.find((fee) => ([returnOutOfHours.hours, undefined].includes(fee.offsetHours) && fee.type === (returnOutOfHours.to === 'start' ? 'before' : 'after'))) 
    : undefined;
  return { 
    outOfOperatingHoursPickUp: outOfOperatingHoursPickUp?.fee || 0, 
    outOfOperatingHoursReturn: outOfOperatingHoursReturn?.fee || 0
  };
}

// Round up to nearest 10
function roundUpTo10(value: number): number {
  return Math.ceil(value / 10) * 10;
}

/**
 * Calculate sale price from vendor price.
 */
export function calcSalePrice(
  vendor_price: number,
  commission_rate: number,
  vat_rate: number
): number {
  const commission = vendor_price * commission_rate;
  const vat = roundUpTo10(commission * vat_rate);
  return vendor_price * (1 + commission_rate) + vat;
}

/**
 * Given sale_price, commission_rate, vat_rate,
 * find vendor_price by searching the possible value.
 */
export function findVendorPrice(
  sale_price: number,
  commission_rate: number,
  vat_rate: number
): number | null {
  // Binary search between 1 and sale_price
  let low = 1;
  let high = sale_price;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = calcSalePrice(mid, commission_rate, vat_rate);

    if (guess === sale_price) {
      return mid; // found exact match
    } else if (guess < sale_price) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return null; // not found
}

// // Example usage:
// const sale = calcSalePrice(800, 0.15, 0.07);
// console.log("Sale price:", sale); // 930

// const vendor = findVendorPrice(930, 0.15, 0.07);
// console.log("Vendor price:", vendor); // 800
