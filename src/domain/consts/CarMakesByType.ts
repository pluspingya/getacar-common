import CarType from '../types/CarType';
import CarMake from '../types/CarMake';

const CarMakesByType: {[key in CarType]: CarMake[]} = {
  ['Sedan']: ["Toyota","Honda","Mitsubishi","BYD","MG","Mazda","Nissan","GWM Ora","Deepal","BWM","Mercedes-Benz"],
  ['Hatchback']: ["Toyota","Honda","Mitsubishi","BYD","MG","Mazda","Nissan","Neta","GWM Ora","GAC Aion"],
  ['SUV & PPV']: ["Toyota","Isuzu","Honda","Ford","Mitsubishi","BYD","MG","Mazda","Nissan","Neta","GWM Havel","GWM Tank","GAC Aion","Deepal","Xpeng","Zeekr","Jaecoo","Hyundai","Kia","BWM","Mercedes-Benz"],
  ['MPV & Van']: ["Toyota","Honda","BYD","MG","Nissan","GAC Aion","Xpeng","Zeekr","Hyundai","Kia"],
  ['Pickup']: ["Toyota","Ford","Mitsubishi","MG","Mazda","Nissan"],
  ['Coupe']: ["MG","Nissan"],
  ['Convertible']: ["Mazda","BWM"],
};

export default Object.freeze(CarMakesByType);
