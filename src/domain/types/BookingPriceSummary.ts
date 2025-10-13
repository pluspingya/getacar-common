type BookingPriceSummary = {
  totalDailyPrice: number;
  totalHourlyPrice: number;
  totalRentalPrice: number;
  totalAdditionalFees: number;
  totalDiscounts: number;
  insuranceDeposit: number;
  bookingDeposit: number;
  totalPrice: number;
  payOnPickup: number;
  actualPaid: number;
};

export default BookingPriceSummary;