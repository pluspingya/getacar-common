import { BookingAdditionalFee } from '../domain/enums';
import { ListingDTO } from '../interface/DTOs';

export type TotalTime = { 
  days: number;
  hours: number; 
};

export function findTotalTime(pickUpDate: Date, returnDate: Date): TotalTime {
  const diff = returnDate.getTime() - pickUpDate.getTime();
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
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
}, listingDTO: ListingDTO): { [key in BookingAdditionalFee]?: number } {
  const additionalFees: { [key in BookingAdditionalFee]?: number } = {};
  const outOfFreeServiceAreaDeliveryFee = listingDTO.deliveryFees.find((deliveryFee) => deliveryFee.locationId === pickUpLocationId)
  if (outOfFreeServiceAreaDeliveryFee) {
    additionalFees[BookingAdditionalFee.OUT_OF_FREE_SERVICE_AREA_DELIVERY] = outOfFreeServiceAreaDeliveryFee.fee;
  }
  const outOfFreeServiceAreaReturnFee = listingDTO.deliveryFees.find((deliveryFee) => deliveryFee.locationId === returnLocationId);
  if (outOfFreeServiceAreaReturnFee) {
    additionalFees[BookingAdditionalFee.OUT_OF_FREE_SERVICE_AREA_RETURN] = outOfFreeServiceAreaReturnFee.fee;
  }
  //TODO: Consider charging for the out of operating hours
  //In order to do this, shop must specify the operating hours and charges
  return additionalFees;
}