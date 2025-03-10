import CarFuel from '../../domain/enums/CarFuel';
import CarTransmission from '../../domain/enums/CarTransmission';
import ImageDTO from './ImageDTO';

type CarDTO = {
  id: string;
  name: string;
  plateNumber: string;
  note?: string;
  make: string;
  model: string;
  submodel?: string;
  year: number;
  transmission: CarTransmission;
  color: string;
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
