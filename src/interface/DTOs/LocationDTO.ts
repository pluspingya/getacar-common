import LocationStatus from '../../domain/enums/LocationStatus';
import LocationLocalizationDTO from './LocationLocalizationDTO';

type LocationDTO = {
  id: string;
  name: string;
  province: string;
  keywords: string;
  latitude?: number;
  longitude?: number;
  status: LocationStatus;
  localization: LocationLocalizationDTO;
  createdAt: string;
  updatedAt: string;
}

export default LocationDTO;