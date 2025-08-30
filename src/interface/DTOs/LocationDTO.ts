import LocationStatus from '../../domain/enums/LocationStatus';

type LocationDTO = {
  id: string;
  name: string;
  province: string;
  keywords: string;
  latitude?: number;
  longitude?: number;
  status: LocationStatus;
  createdAt: string;
  updatedAt: string;
}

export default LocationDTO;