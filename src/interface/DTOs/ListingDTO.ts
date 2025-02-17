import ListingStatus from '../../domain/enums/ListingStatus';
import ShopDTO from './ShopDTO';
import CarDTO from './CarDTO';
import LocationDTO from './LocationDTO';

type DeliverFee = {
  locationId: string;
  fee: number;
}

type ListingDTO = {
  id: string;
  name: string;
  accountId: string;
  shop: ShopDTO;
  car: CarDTO;
  description?: string;
  locations: LocationDTO[];
  deliveryFees: DeliverFee[];
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