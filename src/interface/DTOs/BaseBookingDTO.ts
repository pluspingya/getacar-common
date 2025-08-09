import { BookingAction, BookingAdditionalFees, BookingDocumentCompletion, BookingStatus, LanguageCode } from '../../domain';
import AnonymousCarDTO from './AnonymousCarDTO';

type BaseBookingDTO = {
  id: string;
  ref: string;
  shopId: string;
  carId: string;
  car: AnonymousCarDTO | undefined;
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
  languageCode: LanguageCode;
  createdAt: string;
  updatedAt: string;
}

export default BaseBookingDTO;