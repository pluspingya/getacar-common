import { BookingInternalStatus, BookingStatus, CarMake, CarModel } from '../../domain';

type AdminBookingListItemDTO = {
  id: string;
  ref: string;
  status: BookingStatus;
  internalStatus: BookingInternalStatus;
  carId: string;
  carMake: CarMake;
  carModel: CarModel;
  carPlateNumber: string;
  shopId: string;
  shopName: string;
  customerName: string;
  pickUpDate: string;
  returnDate: string;
}

export default AdminBookingListItemDTO;