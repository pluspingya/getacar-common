import CarFuel from '../enums/CarFuel';
import CarModel from '../enums/CarModel';

const CarFuelsByModel: {[key in CarModel]: CarFuel[]} = {
  //Toyota
  [CarModel.Vios]: [CarFuel.Petrol],
  [CarModel.Veloz]: [CarFuel.Petrol],
  [CarModel.Yaris]: [CarFuel.Petrol],
  [CarModel.YarisAtiv]: [CarFuel.Petrol],
  [CarModel.YarisCross]: [CarFuel.Petrol],
  [CarModel.CorollaAltis]: [CarFuel.Petrol],
  [CarModel.CorollaCross]: [CarFuel.Petrol],
  [CarModel.Camry]: [CarFuel.Petrol],
  [CarModel.Fortuner]: [CarFuel.Diesel],
  [CarModel.Innova]: [CarFuel.Petrol, CarFuel.Diesel],
  [CarModel.Hilux]: [CarFuel.Diesel],
  [CarModel.Hiace]: [CarFuel.Diesel],
  [CarModel.Alphard]: [CarFuel.Petrol, CarFuel.Hybrid],

  //Honda
  [CarModel.City]: [CarFuel.Petrol],
  [CarModel.Civic]: [CarFuel.Petrol],
  [CarModel.CRV]: [CarFuel.Petrol],
  [CarModel.HRV]: [CarFuel.Petrol, CarFuel.Hybrid],
  [CarModel.BRV]: [CarFuel.Petrol],
  [CarModel.Accord]: [CarFuel.Petrol, CarFuel.Hybrid],

  //Isuzu
  [CarModel.DMax]: [CarFuel.Diesel],
  [CarModel.MUX]: [CarFuel.Diesel],

  //Nissan
  [CarModel.Almera]: [CarFuel.Petrol],
  [CarModel.Navara]: [CarFuel.Diesel],
  [CarModel.Terra]: [CarFuel.Diesel],

  //Hyundai
  [CarModel.H1]: [CarFuel.Diesel],
  [CarModel.Staria]: [CarFuel.Diesel],

  //Suzuki
  [CarModel.Swift]: [CarFuel.Petrol],

  [CarModel.Other]: [CarFuel.Petrol, CarFuel.Diesel, CarFuel.Hybrid, CarFuel.Electric]
};

export default Object.freeze(CarFuelsByModel);