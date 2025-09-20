type CommissionDataDTO = {
  bookingId: string;
  description: string;
  startDate: string;
  endDate: string;
  numberOfDays: number;
  numberOfHours: number;
  rentalPrice: number;
  hourlyPrice: number;
  basePrice: number;
  commissionRate: number;
}

export default CommissionDataDTO;