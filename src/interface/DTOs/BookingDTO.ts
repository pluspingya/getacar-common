import { BookingAction, BookingAdditionalFees, BookingDocumentCompletion, BookingStatus, LanguageCode } from '../../domain';
import BookingHistoryItemDTO from './BookingHistoryItemDTO';
import CarDTO from './CarDTO';
import CustomerDTO from './CustomerDTO';
import ShopDTO from './ShopDTO';

type BookingDTO = {
  id: string;
  ref: string;
  shopId: string;
  shop: ShopDTO | undefined;
  carId: string;
  car: CarDTO | undefined;
  customer: CustomerDTO | undefined;
  pickUpDate: string;
  pickUpLocationId: string;
  returnDate: string;
  returnLocationId: string;
  deliveryNote: string;
  rentalPrice: number;
  hourlyPrice: number;
  numberOfDays: number;
  numberOfHours: number;
  totalPrice: number;
  additionalFees: BookingAdditionalFees;
  insuranceDeposit: number;
  bookingDeposit: number;
  priceNote: string;
  status: BookingStatus;
  documentCompletion: BookingDocumentCompletion;
  allowedActions: BookingAction[] | undefined;
  history: BookingHistoryItemDTO[] | undefined;
  languageCode: LanguageCode;
  createdAt: string;
  updatedAt: string;
}

export default BookingDTO;