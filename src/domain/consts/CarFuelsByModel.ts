import CarFuel from '../types/CarFuel';
import CarModel from '../types/CarModel';

const CarFuelsByModel: {[key in CarModel]: CarFuel[]} = {
  // Toyota
  ['Vios']: ['Petrol'],
  ['Veloz']: ['Petrol'],
  ['Yaris']: ['Petrol'],
  ['Yaris Ativ']: ['Petrol'],
  ['Yaris Cross']: ['Petrol'],
  ['Corolla Altis']: ['Petrol'],
  ['Corolla Cross']: ['Hybrid', 'Petrol'],
  ['Camry']: ['Petrol', 'Hybrid'],
  ['Fortuner']: ['Diesel'],
  ['Innova']: ['Petrol', 'Diesel'],
  ['Hilux']: ['Diesel'],
  ['Hiace']: ['Diesel'],
  ['Alphard']: ['Petrol', 'Hybrid'],
  // Honda
  ['City']: ['Petrol'],
  ['Civic']: ['Petrol'],
  ['CR-V']: ['Petrol'],
  ['HR-V']: ['Petrol', 'Hybrid'],
  ['BR-V']: ['Petrol'],
  ['Accord']: ['Petrol', 'Hybrid'],
  // Isuzu
  ['D-Max']: ['Diesel'],
  ['MU-X']: ['Diesel'],
  // Nissan
  ['Almera']: ['Petrol'],
  ['Navara']: ['Diesel'],
  ['Terra']: ['Diesel'],
  // Hyundai
  ['H1']: ['Diesel'],
  ['Staria']: ['Diesel'],
  // Suzuki
  ['Swift']: ['Petrol'],
  ['Other']: ['Petrol', 'Diesel', 'Hybrid', 'Electric']
};

export default Object.freeze(CarFuelsByModel);