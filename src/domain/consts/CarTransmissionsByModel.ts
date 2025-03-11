import CarModel from '../enums/CarModel';
import CarTransmission from '../enums/CarTransmission';

const CarTransmissionsByCarModel: {[key in CarModel]: CarTransmission[]} = {
  //Toyota
  [CarModel.Vios]: [CarTransmission.AUTOMATIC],
  [CarModel.Veloz]: [CarTransmission.AUTOMATIC],
  [CarModel.Yaris]: [CarTransmission.AUTOMATIC],
  [CarModel.YarisAtiv]: [CarTransmission.AUTOMATIC],
  [CarModel.YarisCross]: [CarTransmission.AUTOMATIC],
  [CarModel.CorollaAltis]: [CarTransmission.AUTOMATIC],
  [CarModel.CorollaCross]: [CarTransmission.AUTOMATIC],
  [CarModel.Camry]: [CarTransmission.AUTOMATIC],
  [CarModel.Fortuner]: [CarTransmission.AUTOMATIC],
  [CarModel.Innova]: [CarTransmission.AUTOMATIC],
  [CarModel.Hilux]: [CarTransmission.AUTOMATIC, CarTransmission.MANUAL],
  [CarModel.Hiace]: [CarTransmission.AUTOMATIC, CarTransmission.MANUAL],
  [CarModel.Alphard]: [CarTransmission.AUTOMATIC],

  //Honda
  [CarModel.City]: [CarTransmission.AUTOMATIC],
  [CarModel.Civic]: [CarTransmission.AUTOMATIC],
  [CarModel.CRV]: [CarTransmission.AUTOMATIC],
  [CarModel.HRV]: [CarTransmission.AUTOMATIC],
  [CarModel.BRV]: [CarTransmission.AUTOMATIC],
  [CarModel.Accord]: [CarTransmission.AUTOMATIC],

  //Isuzu
  [CarModel.DMax]: [CarTransmission.AUTOMATIC, CarTransmission.MANUAL],
  [CarModel.MUX]: [CarTransmission.AUTOMATIC],

  //Nissan
  [CarModel.Almera]: [CarTransmission.AUTOMATIC],
  [CarModel.Navara]: [CarTransmission.AUTOMATIC, CarTransmission.MANUAL],
  [CarModel.Terra]: [CarTransmission.AUTOMATIC],

  //Hyundai
  [CarModel.H1]: [CarTransmission.AUTOMATIC, CarTransmission.MANUAL],
  [CarModel.Staria]: [CarTransmission.AUTOMATIC],

  //Suzuki
  [CarModel.Swift]: [CarTransmission.AUTOMATIC],

  [CarModel.Other]: [CarTransmission.AUTOMATIC, CarTransmission.MANUAL]
}

export default Object.freeze(CarTransmissionsByCarModel);