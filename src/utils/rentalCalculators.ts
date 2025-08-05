import { BookingAdditionalFees } from '../domain';
import { ListingDTO } from '../interface/DTOs';

export type TotalTime = { 
  days: number;
  hours: number; 
};

export function findTotalTime(pickUpDate: Date, returnDate: Date, maxHours: number = 5): TotalTime {
  const diff = returnDate.getTime() - pickUpDate.getTime();
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.ceil(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  if (hours > maxHours) {
    days += 1;
    hours = 0;
  }
  return { days, hours };
}

export function findTotalRentalTime(pickUpDate: Date, returnDate: Date, listing: ListingDTO): TotalTime {
  const totalTime = findTotalTime(pickUpDate, returnDate);
  if (totalTime.hours > listing.maximumRentalHours) {
    totalTime.days += 1;
    totalTime.hours = 0;
  }
  return totalTime;
}

export function findTotalRentalPrice(totalTime: TotalTime, listing: ListingDTO): number {
  return totalTime.days * (listing.rentalPrice || listing.car.rentalPrice) + 
         totalTime.hours * (listing.hourlyPrice || listing.car.hourlyPrice);
}

export function findAdditionalFees({
  pickUpLocationId,
  returnLocationId,
}: {
  pickUpLocationId: string;
  returnLocationId: string;
  pickUpDate: Date;
  returnDate: Date;
}, listingDTO: ListingDTO): BookingAdditionalFees {
  return {
    outOfFreeServiceAreaDelivery: listingDTO.deliveryFees.find((deliveryFee) => deliveryFee.locationId === pickUpLocationId)?.fee || 0,
    outOfFreeServiceAreaReturn: listingDTO.deliveryFees.find((deliveryFee) => deliveryFee.locationId === returnLocationId)?.fee || 0,
    //TODO: Consider charging for the out of operating hours
    //In order to do this, shop must specify the operating hours and charges in either listing or shop
    outOfOperatingHoursDelivery: 0,
    outOfOperatingHoursReturn: 0
  }
}