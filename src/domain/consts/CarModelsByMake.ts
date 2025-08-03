import CarMake from '../types/CarMake';
import CarModel from '../types/CarModel';

const CarModelsByMake: {[key in CarMake]: CarModel[]} = {
  ['Toyota']: ["Yaris Ativ","Yaris","Vios","Fortuner","Corolla Altis","Corolla Cross","CAMRY","Yaris Cross","Veloz","Innova Zenix","Alphard","Hilux Champ","Hilux Vego","Hilux Revo","Hiace","Commuter","Majesty"],
  ['Isuzu']: ["Mu-x"],
  ['Honda']: ["City","City Hatchback","BR-V","WR-V","Civic","Accord e:HEV","HR-V e:HEV","CR-V","e:N1"],
  ['Ford']: ["Everest","Ranger"],
  ['Mitsubishi']: ["Mirage","Attrage","Xpander","Xforce","Triton","Pajero"],
  ['BYD']: ["Atto 3","Dolphin","Seal","Sealion 7","M6","Seal 5"],
  ['MG']: ["3","5","4","ZS","HS","EP","ES","VS","Maxus 7","Maxus 9","IM6","S5","Cyberster","Extender"],
  ['Mazda']: ["2 Sedan","2 Hatchback","3 Sedan","3 Fastback","MX-5","CX-3","CX-30","CX-5","CX-8","BT-50"],
  ['Nissan']: ["Almera","Sylphy","Note","Kicks","X-Trail","Terra","Navara","Serena","GT-R","Leaf"],
  ['Neta']: ["Neta V","Neta V-II","Neta X"],
  ['GWM Havel']: ["Haval H6"],
  ['GWM Ora']: ["Good Cat","07"],
  ['GWM Tank']: ["300","500"],
  ['GAC Aion']: ["Y Plus","V","UT","M8"],
  ['Deepal']: ["L07","S07","S05"],
  ['Xpeng']: ["G6","X9"],
  ['Zeekr']: ["X","009"],
  ['Jaecoo']: ["6"],
  ['Hyundai']: ["Santa Fe","Stargazer","Staria","H-1"],
  ['Kia']: ["EV5","EV9","Carnival"],
  ['BWM']: ["3 Series","5 Series","7 Series Sedan","i5","i7","X1","X3","Z4 Roadster"],
  ['Mercedes-Benz']: ["C-Class Saloon","E-Class Saloon","GLC SUV","GLA SUV","S-Class Saloon"],
};

export default Object.freeze(CarModelsByMake);
