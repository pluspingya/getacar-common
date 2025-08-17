import Timezone from '../../domain/types/Timezone';
import AddressDTO from './AddressDTO';
import LocationDTO from './LocationDTO';
import DeliveryFeeDTO from './DeliveryFeeDTO';

type ShopDTO = {
  id: string;
  accountId: string;  
  name: string;
  address: AddressDTO;
  phone: string;
  email?: string;
  website?: string;
  logo?: string;
  description?: string;
  paymentDetailIds: string[];
  operatingHoursStartTime: string;
  operatingHoursEndTime: string;
  operatingHoursTimezone: Timezone;
  salesHoursStartTime: string;
  salesHoursEndTime: string;
  salesHoursTimezone: Timezone;
  locations?: LocationDTO[];
  deliveryFees: DeliveryFeeDTO[];
  createdAt: string;
  updatedAt: string;
}

export default ShopDTO;