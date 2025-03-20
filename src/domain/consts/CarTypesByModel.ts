import CarModel from '../types/CarModel';
import CarType from '../types/CarType';

const CarTypesByModel: {[key in CarModel]: CarType} = {
  // Toyota
  ['Vios']: 'Sedan',
  ['Veloz']: 'Wagon',
  ['Yaris']: 'Hatchback',
  ['Yaris Ativ']: 'Sedan',
  ['Yaris Cross']: 'SUV',
  ['Corolla Altis']: 'Sedan',
  ['Corolla Cross']: 'SUV',
  ['Camry']: 'Sedan',
  ['Fortuner']: 'SUV',
  ['Innova']: 'Wagon',
  ['Hilux']: 'Pickup',
  ['Hiace']: 'Van',
  ['Alphard']: 'Van',
  // Honda
  ['City']: 'Sedan',
  ['Civic']: 'Sedan',
  ['CR-V']: 'SUV',
  ['HR-V']: 'SUV',
  ['BR-V']: 'Wagon',
  ['Accord']: 'Sedan',
  // Isuzu
  ['D-Max']: 'Pickup',
  ['MU-X']: 'SUV',
  // Nissan
  ['Almera']: 'Sedan',
  ['Navara']: 'Pickup',
  ['Terra']: 'SUV',
  // Hyundai
  ['H1']: 'Van',
  ['Staria']: 'Van',
  // Suzuki
  ['Swift']: 'Hatchback',
  // Other
  ['Other']: 'Other'
};

export default Object.freeze(CarTypesByModel);