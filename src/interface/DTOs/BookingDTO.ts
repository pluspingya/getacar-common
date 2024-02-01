import { CarDTO, UserDTO } from 'getacar-common';

export enum BookingStatus {
  PENDING = 'PENDING',
  REFUSED = 'REFUSED',
  APPROVED = 'APPROVED',
  OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
  DELIVERED = 'DELIVERED',
  RETURNED = 'RETURNED',
  CANCELLED = 'CANCELLED',
}

export default class BookingDTO {
  id: string;
  carId: string;
  car?: CarDTO;
  pickUpDate: string;
  pickUpLocation: string;
  returnDate: string;
  returnLocation: string;
  deliveryNote?: string;
  rentalPrice: number;
  totalPrice: number;
  insuranceDeposit: number;
  bookingDeposit: number;
  priceNote?: string;
  status: string;
  authorId: string;
  author?: UserDTO;
  createdAt: string;
  updatedAt: string;
}
