import BaseBookingDTO from './BaseBookingDTO';
import BookingHistoryItemDTO from './BookingHistoryItemDTO';
import CustomerDTO from './CustomerDTO';
import ShopDTO from './ShopDTO';

type BookingDTO = BaseBookingDTO & {
  shop: ShopDTO | undefined;
  customer: CustomerDTO;
  history: BookingHistoryItemDTO[];
}

export default BookingDTO;