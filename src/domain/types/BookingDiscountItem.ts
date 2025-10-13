import BookingDiscountType from '../enums/BookingDiscountType';

type BookingDiscountItem = {
  type: BookingDiscountType;
  amount: number;
  code: string | null;
  description: string | null;
}

export default BookingDiscountItem;