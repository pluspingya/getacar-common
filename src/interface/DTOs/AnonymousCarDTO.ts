import { CarColor, CarFuel, CarMake, CarModel, CarTransmission, CarType } from '../../domain/types';
import ImageDTO from './ImageDTO';

type AnonymousCarDTO = {
  id: string;
  name: string;
  plateNumber: string;
  type: CarType;
  make: CarMake;
  model: CarModel;
  submodel?: string;
  year: number;
  transmission: CarTransmission;
  color: CarColor;
  fuel: CarFuel;
  doors: number;
  seats: number;
  images?: ImageDTO[];
}

export default AnonymousCarDTO;
