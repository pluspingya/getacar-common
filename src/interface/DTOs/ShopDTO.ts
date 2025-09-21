import Timezone from '../../domain/types/Timezone';
import AddressDTO from './AddressDTO';
import LocationDTO from './LocationDTO';
import PaymentDetailDTO from './PaymentDetailDTO';
import DeliveryFeeDTO from './DeliveryFeeDTO';
import AfterHoursFeeDTO from './AfterHoursFeeDTO';

type ShopDTO = {
  id: string;
  accountId: string;  
  name: string;
  taxId: string | null;
  address: AddressDTO;
  phone: string;
  email: string | null;
  website: string | null;
  logo: string | null;
  description: string | null;
  paymentDetails: PaymentDetailDTO[] | undefined;
  operatingHoursStartTime: string;
  operatingHoursEndTime: string;
  operatingHoursTimezone: Timezone;
  salesHoursStartTime: string;
  salesHoursEndTime: string;
  salesHoursTimezone: Timezone;
  afterHoursFees: AfterHoursFeeDTO[];
  locations: LocationDTO[] | undefined;
  deliveryFees: DeliveryFeeDTO[];
  createdAt: string;
  updatedAt: string;
}

export default ShopDTO;