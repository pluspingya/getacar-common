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