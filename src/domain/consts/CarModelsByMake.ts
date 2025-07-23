import CarMake from '../types/CarMake';
import CarModel from '../types/CarModel';

const CarModelsByMake: {[key in CarMake]: CarModel[]} = {
  ['Toyota']: ['Vios', 'Veloz', 'Yaris', 'Yaris Ativ', 'Yaris Cross', 'Corolla Altis', 'Corolla Cross', 'Camry', 'Fortuner', 'Innova', 'Hilux', 'Hiace', 'Alphard'],
  ['Honda']: ['City', 'Civic', 'CR-V', 'HR-V', 'BR-V', 'Accord'],
  ['Isuzu']: ['D-Max', 'MU-X'],
  ['Nissan']: ['Almera', 'Navara', 'Terra'],
  ['Hyundai']: ['H1', 'Staria'],
  ['Suzuki']: ['Swift'],
}

export default Object.freeze(CarModelsByMake);