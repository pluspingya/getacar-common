import { BookingHistoryItemType } from '../../domain/enums';
import UserDTO from './UserDTO';

type BookingHistoryItemDTO = {
  id: string;
  type: BookingHistoryItemType;
  details: string | null;
  bookingId: string | null;
  authorType: string;
  authorId: string | null;
  author: UserDTO | null;
  createdAt: string;
}

export default BookingHistoryItemDTO;