import CarFuel from '../enums/CarFuel';
import CarModel from '../enums/CarModel';

// const CarFuelsByModel: {[key in CarModel]: CarFuel[]} = {
//   //Toyota
//   [CarModel.VIOS]: [CarFuel.Petrol],
//   [CarModel.VELOZ]: [CarFuel.Petrol],
//   [CarModel.YARIS]: [CarFuel.Petrol],
//   [CarModel.YARISATIV]: [CarFuel.Petrol],
//   [CarModel.YARISCROSS]: [CarFuel.Petrol],
//   [CarModel.COROLLAALTIS]: [CarFuel.Petrol],
//   [CarModel.COROLLACROSS]: [CarFuel.Petrol],
//   [CarModel.CAMRY]: [CarFuel.Petrol],
//   [CarModel.FORTUNER]: [CarFuel.Diesel],
//   [CarModel.INNOVA]: [CarFuel.Petrol, CarFuel.Diesel],
//   [CarModel.HILUX]: [CarFuel.Diesel],
//   [CarModel.HIACE]: [CarFuel.Diesel],
//   [CarModel.ALPHARD]: [CarFuel.Petrol, CarFuel.Hybrid],

//   //Honda
//   [CarModel.City]: [CarFuel.Petrol],
//   [CarModel.Civic]: [CarFuel.Petrol],
//   [CarModel.CRV]: [CarFuel.Petrol],
//   [CarModel.HRV]: [CarFuel.Petrol, CarFuel.Hybrid],
//   [CarModel.BRV]: [CarFuel.Petrol],
//   [CarModel.Accord]: [CarFuel.Petrol, CarFuel.Hybrid],

//   //Isuzu
//   [CarModel.DMax]: [CarFuel.Diesel],
//   [CarModel.MUX]: [CarFuel.Diesel],

//   //Nissan
//   [CarModel.Almera]: [CarFuel.Petrol],
//   [CarModel.Navara]: [CarFuel.Diesel],
//   [CarModel.Terra]: [CarFuel.Diesel],

//   //Hyundai
//   [CarModel.H1]: [CarFuel.Diesel],
//   [CarModel.Staria]: [CarFuel.Diesel],

//   //Suzuki
//   [CarModel.Swift]: [CarFuel.Petrol],

//   [CarModel.Other]: [CarFuel.Petrol, CarFuel.Diesel, CarFuel.Hybrid, CarFuel.Electric]
// };

const CarFuelsByModel: {[key in CarModel]: CarFuel[]} = {
  // Toyota
  ['Vios']: ['Petrol'],
  ['Veloz']: ['Petrol'],
  ['Yaris']: ['Petrol'],
  ['Yaris Ativ']: ['Petrol'],
  ['Yaris Cross']: ['Petrol'],
  ['Corolla Altis']: ['Petrol'],
  ['Corolla Cross']: ['Petrol'],
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