import { Timezone } from '../../domain/types';
import AfterHoursFeeDTO from './AfterHoursFeeDTO';

type AnonymousShopDTO = {
  operatingHoursStartTime: string;
  operatingHoursEndTime: string;
  operatingHoursTimezone: Timezone;
  salesHoursStartTime: string;
  salesHoursEndTime: string;
  salesHoursTimezone: Timezone;
  afterHoursFees: AfterHoursFeeDTO[];
}

export default AnonymousShopDTO;