console.log('Generating car constants...');

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { parse } from 'csv-parse/sync';

const csvFilePath = join(__dirname, '../../getacar-assets/Get A Car 24 Co. Ltd. - Car Options.csv');
const csvData = readFileSync(csvFilePath);
const records = parse(csvData, {
  columns: true,
  skip_empty_lines: true
});

type CarRecord = {
  Make: string;
  Model: string;
  Type: string;
  Transmission: string;
  Fuel: string;
  Seat: string;
  Year: string;
  Color: string;
};

const populateYears = (start: number, end: number): number[] => {
  const years: number[] = [];
  for (let i = start; i <= end; i++) {
    years.push(i);
  }
  return years;
};

const thisYear = new Date().getFullYear();

const carTypes = new Set<string>();
const carMakes = new Set<string>();
const carModels = new Set<string>();
const carYears = new Set<number>();
const carTransmissions = new Set<string>();
const carFuels = new Set<string>();
const carSeats = new Set<string>();
const carColors = new Set<string>();
const carMakesByType = new Map<string, string[]>();
const carModelsByMake = new Map<string, string[]>();
const carTypesByModel = new Map<string, string>();
const carTransmissionsByModel = new Map<string, string[]>();
const carFuelsByModel = new Map<string, string[]>();
const carSeatsByModel = new Map<string, number[]>();
const carYearsByModel = new Map<string, number[]>();

for (const record of records) {
  const { Make, Model: dirtyModel, Type, Transmission, Fuel, Seat, Color, Year } = record as CarRecord;
  // console.log(`Make: ${Make}, Model: ${Model}, Type: ${Type}, Transmission: ${Transmission}, Fuel: ${Fuel}, Seat: ${Seat}`);
  const [fromYear, toYear] = Year.split('-').map(y => Number(y.trim()));
  const years = populateYears(fromYear || thisYear, toYear || thisYear);

  const Model = dirtyModel.replace(/"/g, '').trim();
  carMakes.add(Make);
  carModels.add(Model);
  carTypes.add(Type);
  years.forEach(year => carYears.add(year));
  const transmissions = Transmission.split(',').map(t => t.trim());
  transmissions.forEach(t => carTransmissions.add(t));
  const fuels = Fuel.split(',').map(f => f.trim());
  fuels.forEach(f => carFuels.add(f));
  const seats = Seat.split(',').map(s => s.trim());
  seats.forEach(s => carSeats.add(s));

  if (Color) carColors.add(Color);

  if (!carMakesByType.has(Type)) {
    carMakesByType.set(Type, []);
  }
  if (!carMakesByType.get(Type)?.includes(Make)) {
    carMakesByType.get(Type)?.push(Make);
  }

  if (!carModelsByMake.has(Make)) {
    carModelsByMake.set(Make, []);
  }
  carModelsByMake.get(Make)?.push(Model);

  carTypesByModel.set(Model, Type);

  if (!carTransmissionsByModel.has(Model)) {
    carTransmissionsByModel.set(Model, []);
  }
  carTransmissions.forEach(t => {
    carTransmissionsByModel.get(Model)?.push(t);
  });

  if (!carFuelsByModel.has(Model)) {
    carFuelsByModel.set(Model, []);
  }
  fuels.forEach(f => {
    carFuelsByModel.get(Model)?.push(f);
  });

  if (!carSeatsByModel.has(Model)) {
    carSeatsByModel.set(Model, []);
  }
  seats.forEach(s => {
    carSeatsByModel.get(Model)?.push(Number(s));
  });

  carYearsByModel.set(Model, years.reverse());
}

// console.log('Unique car makes:', Array.from(carMakes));
// console.log('Unique car types:', Array.from(carTypes));
// console.log('Unique car fuels:', Array.from(carFuels));
// console.log('Unique car seats:', Array.from(carSeats));
// console.log('Unique car transmissions:', Array.from(carTransmissions));
// console.log('Car models by make:', carModelsByMake);
// console.log('Car fuels by model:', carFuelsByModel);
// console.log('Car seats by model:', carSeatsByModel);
// console.log('Car transmissions by model:', carTransmissionsByModel);
// console.log('Car types by model:', carTypesByModel);

const writeArrayConst = (name: string, values: Set<any> | any[]) => {
  const output = `src/domain/consts/${name}.ts`;
  const content = `const ${name} = ${JSON.stringify(Array.isArray(values) ? values : Array.from(values))} as const;
export default Object.freeze(${name});`;
  writeFileSync(output, content);
  console.log(`Wrote ${name} to ${output}`);
};

const writeObjectConst = ({
  name,
  keyName,
  valueName,
  object
}: {
  name: string;
  keyName: string;
  valueName: string;
  object: Map<string, any>;
}) => {
  const keys = Array.from(object.keys());
  const isObjectValueArray = Array.isArray(object.get(keys[0]));
  const output = `src/domain/consts/${name}.ts`;
  let content = `import ${keyName} from '../types/${keyName}';\n`;
  if (valueName !== 'number') {
    content += `import ${valueName} from '../types/${valueName}';\n`;
  }
  content += `\n`;
  content += `const ${name}: {[key in ${keyName}]: ${valueName}${isObjectValueArray ? '[]' : ''}} = {\n`;
  keys.forEach((key) => {
    const value = object.get(key) || [];
    content += `  ['${key}']: ${JSON.stringify(value)},\n`;
  });
  content += `};\n\n`;
  content += `export default Object.freeze(${name});\n`;
  writeFileSync(output, content);
  console.log(`Wrote ${name} to ${output}`);
}

const carYearsSorted = Array.from(carYears).sort((a, b) => b - a);

writeArrayConst('CarTypes', carTypes);
writeArrayConst('CarMakes', carMakes);
writeArrayConst('CarModels', carModels);
writeArrayConst('CarYears', carYearsSorted);
writeArrayConst('CarFuels', carFuels);
writeArrayConst('CarTransmissions', carTransmissions);
writeArrayConst('CarColors', carColors);

writeObjectConst({
  name: 'CarMakesByType',
  keyName: 'CarType',
  valueName: 'CarMake',
  object: carMakesByType
})
writeObjectConst({
  name: 'CarFuelsByModel',
  keyName: 'CarModel',
  valueName: 'CarFuel',
  object: carFuelsByModel
});

writeObjectConst({
  name: 'CarModelsByMake',
  keyName: 'CarMake',
  valueName: 'CarModel',
  object: carModelsByMake
});

writeObjectConst({
  name: 'CarSeatsByModel',
  keyName: 'CarModel',
  valueName: 'number',
  object: carSeatsByModel
});

writeObjectConst({
  name: 'CarTransmissionsByModel',
  keyName: 'CarModel',
  valueName: 'CarTransmission',
  object: carTransmissionsByModel
});

writeObjectConst({
  name: 'CarTypesByModel',
  keyName: 'CarModel',
  valueName: 'CarType',
  object: carTypesByModel
});

writeObjectConst({
  name: 'CarYearsByModel',
  keyName: 'CarModel',
  valueName: 'number',
  object: carYearsByModel
})