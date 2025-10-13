enum BookingDiscountType {
  MANUAL = 'MANUAL', // manually applied discount by an admin
  PROMO_CODE = 'PROMO_CODE', //a single code that can be used by multiple users
  UNIQUE_PROMO_CODE = 'UNIQUE_PROMO_CODE', //a single code that can be used by a single user
}

export default BookingDiscountType;