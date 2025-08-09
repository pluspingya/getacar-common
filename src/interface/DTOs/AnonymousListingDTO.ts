import ListingStatus from '../../domain/enums/ListingStatus';
import LocationDTO from './LocationDTO';
import DeliverFeeDTO from './DeliveryFeeDTO';
import AnonymousCarDTO from './AnonymousCarDTO';

type AnonymousListingDTO = {
  id: string;
  name: string;
  car: AnonymousCarDTO;
  description?: string;
  locations: LocationDTO[];
  deliveryFees: DeliverFeeDTO[];
  rentalPrice: number;
  hourlyPrice: number;
  insuranceDeposit: number;
  bookingDeposit: number;
  minimumRentalDays: number;
  maximumRentalHours: number;
  startDate: string;
  endDate: string;
  status: ListingStatus;
}

export default AnonymousListingDTO;