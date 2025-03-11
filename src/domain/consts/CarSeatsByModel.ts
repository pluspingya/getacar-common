import CarModel from '../enums/CarModel';

const CarSeatsByModel: {[key in CarModel]: number[]} = {
  //Toyota
 [CarModel.Vios]: [5],
 [CarModel.Veloz]: [7],
 [CarModel.Yaris]: [5],
 [CarModel.YarisAtiv]: [5],
 [CarModel.YarisCross]: [5],
 [CarModel.CorollaAltis]: [5],
 [CarModel.CorollaCross]: [5],
 [CarModel.Camry]: [5],
 [CarModel.Fortuner]: [7],
 [CarModel.Innova]: [7],
 [CarModel.Hilux]: [2, 5],
 [CarModel.Hiace]: [10, 11],
 [CarModel.Alphard]: [7],

 //Honda
 [CarModel.City]: [5],
 [CarModel.Civic]: [5],
 [CarModel.CRV]: [5],
 [CarModel.HRV]: [5],
 [CarModel.BRV]: [7],
 [CarModel.Accord]: [5],

 //Isuzu
 [CarModel.DMax]: [2, 5],
 [CarModel.MUX]: [7],

 //Nissan
 [CarModel.Almera]: [5],
 [CarModel.Navara]: [2, 5],
 [CarModel.Terra]: [7],

 //Hyundai
 [CarModel.H1]: [7, 11],
 [CarModel.Staria]: [7, 11],

 //Suzuki
 [CarModel.Swift]: [5],

 [CarModel.Other]: [2, 5, 7, 8, 9, 10, 11]
}

export default Object.freeze(CarSeatsByModel);