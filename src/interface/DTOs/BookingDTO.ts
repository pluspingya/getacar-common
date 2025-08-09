import BaseBookingDTO from './BaseBookingDTO';
import BookingHistoryItemDTO from './BookingHistoryItemDTO';
import CarDTO from './CarDTO';
import CustomerDTO from './CustomerDTO';
import ShopDTO from './ShopDTO';

type BookingDTO = BaseBookingDTO & {
  car: CarDTO | undefined;
  shop: ShopDTO | undefined;
  customer: CustomerDTO;
  history: BookingHistoryItemDTO[];
}

export default BookingDTO;