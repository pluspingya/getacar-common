type BookingDocumentCompletionDTO = {
  id_card_or_passport_submitted: boolean;
  driver_license_submitted: boolean;
  other_documents_submitted: boolean;
  payment_evidence_submitted: boolean;
}

export default BookingDocumentCompletionDTO;