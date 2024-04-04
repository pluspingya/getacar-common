import { CarDTO } from 'getacar-common';

export enum ListingStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export default interface ListingDTO {
  id: string;
  accountId: string;
  car: CarDTO;
  description?: string;
  locations: string[];
  rentalPrice: number;
  hourlyPrice: number;
  vendorPrice: number;
  insuranceDeposit: number;
  bookingDeposit: number;
  minimumRentalDays: number;
  startDate: string;
  endDate: string;
  status: ListingStatus;
  createdAt: string;
  updatedAt: string;
}