import { Timezone } from '../../domain/types';
import AfterHoursFeeDTO from './AfterHoursFeeDTO';
import DeliveryFeeDTO from './DeliveryFeeDTO';
import LocationDTO from './LocationDTO';

type AnonymousShopDTO = {
  operatingHoursStartTime: string;
  operatingHoursEndTime: string;
  operatingHoursTimezone: Timezone;
  salesHoursStartTime: string;
  salesHoursEndTime: string;
  salesHoursTimezone: Timezone;
  afterHoursFees: AfterHoursFeeDTO[];
  locations: LocationDTO[] | undefined;
  deliveryFees: DeliveryFeeDTO[];
}

export default AnonymousShopDTO;