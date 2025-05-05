import { BookingAdditionalFee, BookingCompletionKey, BookingStatus } from '../../domain';
import BookingHistoryItemDTO from './BookingHistoryItemDTO';
import CarDTO from './CarDTO';
import CustomerDTO from './CustomerDTO';
import ShopDTO from './ShopDTO';

type BookingDTO = {
  id: string;
  ref: string;
  shopId: string;
  shop?: ShopDTO;
  carId: string;
  car?: CarDTO;
  customer: CustomerDTO;
  pickUpDate: string;
  pickUpLocationId: string;
  returnDate: string;
  returnLocationId: string;
  deliveryNote?: string;
  rentalPrice: number;
  numberOfDays: number;
  numberOfHours: number;
  additionalFees: { [key in BookingAdditionalFee]?: number };
  totalPrice: number;
  insuranceDeposit: number;
  bookingDeposit: number;
  priceNote?: string;
  status: BookingStatus;
  completion: { [key in BookingCompletionKey]: boolean };
  history: BookingHistoryItemDTO[];
  createdAt: string;
  updatedAt: string;
}

export default BookingDTO;