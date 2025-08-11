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