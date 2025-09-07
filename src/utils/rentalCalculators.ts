import { BookingAdditionalFees } from '../domain';
import { AnonymousListingDTO } from '../interface/DTOs';

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
}: {
  pickUpLocationId: string;
  returnLocationId: string;
  pickUpDate: Date;
  returnDate: Date;
}, listing: AnonymousListingDTO): BookingAdditionalFees {
  return {
    outOfFreeServiceAreaDelivery: listing.deliveryFees.find((deliveryFee) => deliveryFee.locationId === pickUpLocationId)?.fee || 0,
    outOfFreeServiceAreaReturn: listing.deliveryFees.find((deliveryFee) => deliveryFee.locationId === returnLocationId)?.fee || 0,
    //TODO: Consider charging for the out of operating hours
    //In order to do this, shop must specify the operating hours and charges in either listing or shop
    outOfOperatingHoursDelivery: 0,
    outOfOperatingHoursReturn: 0
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
    + (booking.additionalFees?.outOfOperatingHoursDelivery || 0)
    + (booking.additionalFees?.outOfOperatingHoursReturn || 0)
    + (booking.additionalFees?.outOfFreeServiceAreaDelivery || 0)
    + (booking.additionalFees?.outOfFreeServiceAreaReturn || 0)
    - booking.bookingDeposit
  );
}

export function findOutOfOperatingHoursFees(listing: AnonymousListingDTO | null, pickUpDate: Date, returnDate: Date): {
  outOfOperatingHoursPickUpFee: number;
  outOfOperatingHoursReturnFee: number;
}{
  if (!listing) return { 
    outOfOperatingHoursPickUpFee: 0, 
    outOfOperatingHoursReturnFee: 0 
  };
  const startTime = new Date(listing.shop.operatingHoursStartTime);
  const endTime = new Date(listing.shop.operatingHoursEndTime);
  const operatingHoursStart = new Date(pickUpDate);
  operatingHoursStart.setHours(startTime.getHours());
  operatingHoursStart.setMinutes(startTime.getMinutes());
  operatingHoursStart.setSeconds(startTime.getSeconds());
  const operatingHoursEnd = new Date(returnDate);
  operatingHoursEnd.setHours(endTime.getHours());
  operatingHoursEnd.setMinutes(endTime.getMinutes());
  operatingHoursEnd.setSeconds(endTime.getSeconds());
  let { hours: pickUpBeforeHours  } = findTotalTime(pickUpDate, operatingHoursStart);
  let { hours: pickUpAfterHours } = findTotalTime(returnDate, operatingHoursEnd);
  let { hours: returnBeforeHours } = findTotalTime(returnDate, operatingHoursStart);
  let { hours: returnAfterHours } = findTotalTime(returnDate, operatingHoursEnd);
  const outOfOperatingHoursPickUp = pickUpBeforeHours > 0 
    ? listing.shop.afterHoursFees.find((fee) => ([pickUpBeforeHours, undefined].includes(fee.offsetHours) && fee.type === 'before')) 
    : pickUpAfterHours > 0 
      ? listing.shop.afterHoursFees.find((fee) => ([pickUpAfterHours, undefined].includes(fee.offsetHours) && fee.type === 'after')) 
      : null 
  ;
  const outOfOperatingHoursReturn = returnBeforeHours > 0 
    ? listing.shop.afterHoursFees.find((fee) => ([returnBeforeHours, undefined].includes(fee.offsetHours) && fee.type === 'before')) 
    : returnAfterHours > 0 
      ? listing.shop.afterHoursFees.find((fee) => ([returnAfterHours, undefined].includes(fee.offsetHours) && fee.type === 'after')) 
      : null;
  return { 
    outOfOperatingHoursPickUpFee: outOfOperatingHoursPickUp?.fee || 0, 
    outOfOperatingHoursReturnFee: outOfOperatingHoursReturn?.fee || 0
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
