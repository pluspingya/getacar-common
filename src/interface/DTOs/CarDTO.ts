import CarTransmission from '../../domain/enums/CarTransmission';

type CarDTO = {
  id: string;
  plateNumber: string;
  note?: string;
  make: string;
  model: string;
  submodel?: string;
  year: number;
  transmission: CarTransmission;
  color: string;
  fuel: string;
  odometer: number;
  doors: number;
  seats: number;
  rentalPrice: number;
  hourlyPrice: number;
  vendorPrice: number;
  insuranceDeposit: number;
  bookingDeposit: number;
  images?: string[];
  accountId: string;
  createdAt: string;
  updatedAt: string;
}

export default CarDTO;
