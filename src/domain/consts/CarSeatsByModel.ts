import CarModel from '../types/CarModel';

const CarSeatsByModel: {[key in CarModel]: number[]} = {
  // Toyota
  ['Vios']: [5],
  ['Veloz']: [7],
  ['Yaris']: [5],
  ['Yaris Ativ']: [5],
  ['Yaris Cross']: [5],
  ['Corolla Altis']: [5],
  ['Corolla Cross']: [5],
  ['Camry']: [5],
  ['Fortuner']: [7],
  ['Innova']: [7],
  ['Hilux']: [2, 5],
  ['Hiace']: [10, 11],
  ['Alphard']: [7],
  // Honda
  ['City']: [5],
  ['Civic']: [5],
  ['CR-V']: [5],
  ['HR-V']: [5],
  ['BR-V']: [7],
  ['Accord']: [5],
  // Isuzu
  ['D-Max']: [2, 5],
  ['MU-X']: [7],
  // Nissan
  ['Almera']: [5],
  ['Navara']: [2, 5],
  ['Terra']: [7],
  // Hyundai
  ['H1']: [7, 11],
  ['Staria']: [7, 11],
  // Suzuki
  ['Swift']: [5],
  // Other
  ['Other']: [2, 5, 7, 8, 9, 10, 11]
};

export default Object.freeze(CarSeatsByModel);