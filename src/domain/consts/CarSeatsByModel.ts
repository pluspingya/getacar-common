import CarModel from '../enums/CarModel';

// const CarSeatsByModel: {[key in CarModel]: number[]} = {
//   //Toyota
//  [CarModel.VIOS]: [5],
//  [CarModel.VELOZ]: [7],
//  [CarModel.YARIS]: [5],
//  [CarModel.YARISATIV]: [5],
//  [CarModel.YARISCROSS]: [5],
//  [CarModel.COROLLAALTIS]: [5],
//  [CarModel.COROLLACROSS]: [5],
//  [CarModel.CAMRY]: [5],
//  [CarModel.FORTUNER]: [7],
//  [CarModel.INNOVA]: [7],
//  [CarModel.HILUX]: [2, 5],
//  [CarModel.HIACE]: [10, 11],
//  [CarModel.ALPHARD]: [7],

//  //Honda
//  [CarModel.City]: [5],
//  [CarModel.Civic]: [5],
//  [CarModel.CRV]: [5],
//  [CarModel.HRV]: [5],
//  [CarModel.BRV]: [7],
//  [CarModel.Accord]: [5],

//  //Isuzu
//  [CarModel.DMax]: [2, 5],
//  [CarModel.MUX]: [7],

//  //Nissan
//  [CarModel.Almera]: [5],
//  [CarModel.Navara]: [2, 5],
//  [CarModel.Terra]: [7],

//  //Hyundai
//  [CarModel.H1]: [7, 11],
//  [CarModel.Staria]: [7, 11],

//  //Suzuki
//  [CarModel.Swift]: [5],

//  [CarModel.Other]: [2, 5, 7, 8, 9, 10, 11]
// }

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