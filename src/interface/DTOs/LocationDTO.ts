import LocationStatus from '../../domain/enums/LocationStatus';
import AddressDTO from './AddressDTO';

type LocationDTO = {
  id: string;
  name: string;
  address?: AddressDTO;
  latitude?: number;
  longitude?: number;
  description?: string;
  status: LocationStatus;
  createdAt: string;
  updatedAt: string;
}

export default LocationDTO;