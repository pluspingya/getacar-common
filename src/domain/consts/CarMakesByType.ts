import CarType from '../types/CarType';
import CarMake from '../types/CarMake';

const CarMakesByType: {[key in CarType]: CarMake[]} = {
  ['Sedan']: ["Toyota","Toyota","Toyota","Toyota","Honda","Honda","Honda","Mitsubishi","BYD","BYD","MG","Mazda","Mazda","Nissan","Nissan","GWM Ora","Deepal","BWM","BWM","BWM","BWM","BWM","Mercedes-Benz","Mercedes-Benz","Mercedes-Benz"],
  ['Hatchback']: ["Toyota","Honda","Mitsubishi","BYD","MG","MG","Mazda","Mazda","Nissan","Nissan","Neta","Neta","GWM Ora","GAC Aion"],
  ['SUV & PPV']: ["Toyota","Toyota","Toyota","Toyota","Toyota","Isuzu","Honda","Honda","Honda","Honda","Ford","Mitsubishi","Mitsubishi","Mitsubishi","BYD","BYD","MG","MG","MG","MG","MG","MG","MG","Mazda","Mazda","Mazda","Mazda","Nissan","Nissan","Nissan","Neta","GWM Havel","GWM Tank","GWM Tank","GAC Aion","GAC Aion","Deepal","Deepal","Xpeng","Zeekr","Jaecoo","Hyundai","Kia","Kia","BWM","BWM","Mercedes-Benz","Mercedes-Benz"],
  ['MPV & Van']: ["Toyota","Toyota","Toyota","Toyota","Honda","BYD","MG","MG","Nissan","GAC Aion","Xpeng","Zeekr","Hyundai","Hyundai","Hyundai","Kia"],
  ['Pickup']: ["Toyota","Toyota","Toyota","Ford","Mitsubishi","MG","Mazda","Nissan"],
  ['Coupe']: ["MG","Nissan"],
  ['Convertible']: ["Mazda","BWM"],
};

export default Object.freeze(CarMakesByType);
