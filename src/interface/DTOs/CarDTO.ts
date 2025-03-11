import { CarColor, CarFuel, CarMake, CarModel, CarTransmission } from '../../domain/types';
import ImageDTO from './ImageDTO';

type CarDTO = {
  id: string;
  name: string;
  plateNumber: string;
  note?: string;
  make: CarMake;
  model: CarModel;
  submodel?: string;
  year: number;
  transmission: CarTransmission;
  color: CarColor;
  fuel: CarFuel;
  odometer: number;
  doors: number;
  seats: number;
  rentalPrice: number;
  hourlyPrice: number;
  vendorPrice: number;
  insuranceDeposit: number;
  bookingDeposit: number;
  images?: ImageDTO[];
  accountId: string;
  createdAt: string;
  updatedAt: string;
}

export default CarDTO;
