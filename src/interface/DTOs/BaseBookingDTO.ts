import { BookingAction, BookingAdditionalFees, BookingChannelType, BookingDocumentCompletion, BookingFlexibilityLevel, BookingStatus, LanguageCode } from '../../domain';
import AnonymousCarDTO from './AnonymousCarDTO';
import CarDTO from './CarDTO';

type BaseBookingDTO = {
  id: string;
  ref: string;
  channelType: BookingChannelType;
  shopId: string;
  carId: string;
  car: AnonymousCarDTO | CarDTO;
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
  flexibilityLevel: BookingFlexibilityLevel;
  status: BookingStatus;
  documentCompletion: BookingDocumentCompletion;
  allowedActions: BookingAction[] | undefined;
  languageCode: LanguageCode;
  createdAt: string;
  updatedAt: string;
}

export default BaseBookingDTO;