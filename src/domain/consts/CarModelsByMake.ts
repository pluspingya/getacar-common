import CarMake from '../types/CarMake';
import CarModel from '../types/CarModel';

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