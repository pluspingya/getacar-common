import CarMake from '../enums/CarMake';
import CarModel from '../enums/CarModel';

// const CarModelsByMake: {[key in CarMake]: CarModel[]} = {
//   [CarMake.TOYOTA]: [
//     CarModel.VIOS,
//     CarModel.VELOZ,
//     CarModel.YARIS,
//     CarModel.YARISATIV,
//     CarModel.YARISCROSS,
//     CarModel.COROLLAALTIS,
//     CarModel.COROLLACROSS,
//     CarModel.CAMRY,
//     CarModel.FORTUNER,
//     CarModel.INNOVA,
//     CarModel.HILUX,
//     CarModel.HIACE,
//     CarModel.ALPHARD,
//     CarModel.Other
//   ],
//   [CarMake.HONDA]: [
//     CarModel.City,
//     CarModel.Civic,
//     CarModel.CRV,
//     CarModel.HRV,
//     CarModel.BRV,
//     CarModel.Accord,
//     CarModel.Other
//   ],
//   [CarMake.ISUZU]: [
//     CarModel.DMax,
//     CarModel.MUX,
//     CarModel.Other
//   ],
//   [CarMake.NISSAN]: [
//     CarModel.Almera,
//     CarModel.Navara,
//     CarModel.Terra,
//     CarModel.Other
//   ],
//   [CarMake.HYUNDAI]: [
//     CarModel.H1,
//     CarModel.Staria,
//     CarModel.Other
//   ],
//   [CarMake.SUZUKI]: [
//     CarModel.Swift,
//     CarModel.Other  
//   ],
//   [CarMake.OTHER]: [
//     CarModel.Other
//   ]
// }

const CarModelsByMake: {[key in CarMake]: CarModel[]} = {
  ['Toyota']: ['Vios', 'Veloz', 'Yaris', 'Yaris Ativ', 'Yaris Cross', 'Corolla Altis', 'Corolla Cross', 'Camry', 'Fortuner', 'Innova', 'Hilux', 'Hiace', 'Alphard', 'Other'],
  ['Honda']: ['City', 'Civic', 'CR-V', 'HR-V', 'BR-V', 'Accord', 'Other'],
  ['Isuzu']: ['D-Max', 'MU-X', 'Other'],
  ['Nissan']: ['Almera', 'Navara', 'Terra', 'Other'],
  ['Hyundai']: ['H1', 'Staria', 'Other'],
  ['Suzuki']: ['Swift', 'Other'],
  ['Other']: ['Other']
}

export default Object.freeze(CarModelsByMake);