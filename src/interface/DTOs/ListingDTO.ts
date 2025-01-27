import ListingStatus from '../../domain/enums/ListingStatus';
import CarDTO from './CarDTO';

type ListingDTO = {
  id: string;
  accountId: string;
  car: CarDTO;
  description?: string;
  locations: string[];
  rentalPrice: number;
  hourlyPrice: number;
  vendorPrice: number;
  insuranceDeposit: number;
  bookingDeposit: number;
  minimumRentalDays: number;
  startDate: string;
  endDate: string;
  status: ListingStatus;
  createdAt: string;
  updatedAt: string;
}

export default ListingDTO;