import CarModel from '../types/CarModel';
import CarTransmission from '../types/CarTransmission';

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