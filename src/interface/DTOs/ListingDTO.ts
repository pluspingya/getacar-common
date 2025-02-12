import ListingStatus from '../../domain/enums/ListingStatus';
import CarDTO from './CarDTO';
import LocationDTO from './LocationDTO';

type ListingDTO = {
  id: string;
  name: string;
  accountId: string;
  car: CarDTO;
  description?: string;
  locations: LocationDTO[];
  rentalPrice: number;
  hourlyPrice: number;
  vendorPrice: number;
  insuranceDeposit: number;
  bookingDeposit: number;
  minimumRentalDays: number;
  maximumRentalHours: number;
  startDate: string;
  endDate: string;
  status: ListingStatus;
  createdAt: string;
  updatedAt: string;
}

export default ListingDTO;