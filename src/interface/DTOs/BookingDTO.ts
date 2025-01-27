import BookingStatus from '../../domain/enums/BookingStatus';
import CarDTO from './CarDTO';
import UserDTO from './UserDTO';

type BookingDTO = {
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
  status: BookingStatus;
  authorId: string;
  author?: UserDTO;
  createdAt: string;
  updatedAt: string;
}

export default BookingDTO;