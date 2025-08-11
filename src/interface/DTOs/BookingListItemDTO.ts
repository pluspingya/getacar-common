import { BookingStatus } from '../../domain';

type BookingListItemDTO = {
  id: string;
  ref: string;
  make: string;
  model: string;
  plateNumber: string;
  pickUpDate: string;
  pickUpLocationId: string;
  returnDate: string;
  returnLocationId: string;
  status: BookingStatus;
}

export default BookingListItemDTO;