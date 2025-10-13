type BookingPriceSummary = {
  totalDailyPrice: number;
  totalHourlyPrice: number;
  totalRentalPrice: number;
  totalAdditionalFees: number;
  totalDiscounts: number;
  insuranceDeposit: number;
  bookingDeposit: number;
  totalPrice: number;
  totalPriceWithDeposit: number;
  payOnPickup: number;
};

export default BookingPriceSummary;