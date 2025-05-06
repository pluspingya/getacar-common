import ImageDTO from './ImageDTO';

type BookingDocumentDTO = {
  idImages: ImageDTO[];
  licenseImages: ImageDTO[];
  otherImages: ImageDTO[];
  paymentImages: ImageDTO[];
};

export default BookingDocumentDTO;