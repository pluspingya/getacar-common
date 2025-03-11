import CarModel from '../enums/CarModel';
import CarTransmission from '../enums/CarTransmission';

// const CarTransmissionsByCarModel: {[key in CarModel]: CarTransmission[]} = {
//   //Toyota
//   [CarModel.VIOS]: [CarTransmission.AUTOMATIC],
//   [CarModel.VELOZ]: [CarTransmission.AUTOMATIC],
//   [CarModel.YARIS]: [CarTransmission.AUTOMATIC],
//   [CarModel.YARISATIV]: [CarTransmission.AUTOMATIC],
//   [CarModel.YARISCROSS]: [CarTransmission.AUTOMATIC],
//   [CarModel.COROLLAALTIS]: [CarTransmission.AUTOMATIC],
//   [CarModel.COROLLACROSS]: [CarTransmission.AUTOMATIC],
//   [CarModel.CAMRY]: [CarTransmission.AUTOMATIC],
//   [CarModel.FORTUNER]: [CarTransmission.AUTOMATIC],
//   [CarModel.INNOVA]: [CarTransmission.AUTOMATIC],
//   [CarModel.HILUX]: [CarTransmission.AUTOMATIC, CarTransmission.MANUAL],
//   [CarModel.HIACE]: [CarTransmission.AUTOMATIC, CarTransmission.MANUAL],
//   [CarModel.ALPHARD]: [CarTransmission.AUTOMATIC],

//   //Honda
//   [CarModel.City]: [CarTransmission.AUTOMATIC],
//   [CarModel.Civic]: [CarTransmission.AUTOMATIC],
//   [CarModel.CRV]: [CarTransmission.AUTOMATIC],
//   [CarModel.HRV]: [CarTransmission.AUTOMATIC],
//   [CarModel.BRV]: [CarTransmission.AUTOMATIC],
//   [CarModel.Accord]: [CarTransmission.AUTOMATIC],

//   //Isuzu
//   [CarModel.DMax]: [CarTransmission.AUTOMATIC, CarTransmission.MANUAL],
//   [CarModel.MUX]: [CarTransmission.AUTOMATIC],

//   //Nissan
//   [CarModel.Almera]: [CarTransmission.AUTOMATIC],
//   [CarModel.Navara]: [CarTransmission.AUTOMATIC, CarTransmission.MANUAL],
//   [CarModel.Terra]: [CarTransmission.AUTOMATIC],

//   //Hyundai
//   [CarModel.H1]: [CarTransmission.AUTOMATIC, CarTransmission.MANUAL],
//   [CarModel.Staria]: [CarTransmission.AUTOMATIC],

//   //Suzuki
//   [CarModel.Swift]: [CarTransmission.AUTOMATIC],

//   [CarModel.Other]: [CarTransmission.AUTOMATIC, CarTransmission.MANUAL]
// }

const CarTransmissionsByCarModel: {[key in CarModel]: CarTransmission[]} = {
  // Toyota
  ['Vios']: ['Automatic'],
  ['Veloz']: ['Automatic'],
  ['Yaris']: ['Automatic'],
  ['Yaris Ativ']: ['Automatic'],
  ['Yaris Cross']: ['Automatic'],
  ['Corolla Altis']: ['Automatic'],
  ['Corolla Cross']: ['Automatic'],
  ['Camry']: ['Automatic'],
  ['Fortuner']: ['Automatic'],
  ['Innova']: ['Automatic'],
  ['Hilux']: ['Automatic', 'Manual'],
  ['Hiace']: ['Automatic', 'Manual'],
  ['Alphard']: ['Automatic'],
  // Honda
  ['City']: ['Automatic'],
  ['Civic']: ['Automatic'],
  ['CR-V']: ['Automatic'],
  ['HR-V']: ['Automatic'],
  ['BR-V']: ['Automatic'],
  ['Accord']: ['Automatic'],
  // Isuzu
  ['D-Max']: ['Automatic', 'Manual'],
  ['MU-X']: ['Automatic'],
  // Nissan
  ['Almera']: ['Automatic'],
  ['Navara']: ['Automatic', 'Manual'],
  ['Terra']: ['Automatic'],
  // Hyundai
  ['H1']: ['Automatic', 'Manual'],
  ['Staria']: ['Automatic'],
  // Suzuki
  ['Swift']: ['Automatic'],
  ['Other']: ['Automatic', 'Manual']
}

export default Object.freeze(CarTransmissionsByCarModel);