import BookingStatus from '../../domain/enums/BookingStatus';
import CarDTO from './CarDTO';
import ShopDTO from './ShopDTO';
import UserDTO from './UserDTO';

type BookingDTO = {
  id: string;
  shopId: string;
  shop?: ShopDTO;
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