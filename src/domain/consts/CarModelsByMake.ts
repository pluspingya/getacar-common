import CarMake from '../enums/CarMake';
import CarModel from '../enums/CarModel';

const CarModelsByMake: {[key in CarMake]: CarModel[]} = {
  [CarMake.Toyota]: [
    CarModel.Vios,
    CarModel.Veloz,
    CarModel.Yaris,
    CarModel.YarisAtiv,
    CarModel.YarisCross,
    CarModel.CorollaAltis,
    CarModel.CorollaCross,
    CarModel.Camry,
    CarModel.Fortuner,
    CarModel.Innova,
    CarModel.Hilux,
    CarModel.Hiace,
    CarModel.Alphard,
    CarModel.Other
  ],
  [CarMake.Honda]: [
    CarModel.City,
    CarModel.Civic,
    CarModel.CRV,
    CarModel.HRV,
    CarModel.BRV,
    CarModel.Accord,
    CarModel.Other
  ],
  [CarMake.Isuzu]: [
    CarModel.DMax,
    CarModel.MUX,
    CarModel.Other
  ],
  [CarMake.Nissan]: [
    CarModel.Almera,
    CarModel.Navara,
    CarModel.Terra,
    CarModel.Other
  ],
  [CarMake.Hyundai]: [
    CarModel.H1,
    CarModel.Staria,
    CarModel.Other
  ],
  [CarMake.Suzuki]: [
    CarModel.Swift,
    CarModel.Other  
  ],
  [CarMake.Other]: [
    CarModel.Other
  ]
}

export default Object.freeze(CarModelsByMake);