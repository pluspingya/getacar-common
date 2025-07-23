import CarModel from '../types/CarModel';

const populateYears = (start: number, end: number): number[] => {
  const years: number[] = [];
  for (let i = start; i <= end; i++) {
    years.push(i);
  }
  return years;
};

const thisYear = new Date().getFullYear();

//TODO: Correct the years
const CarYearsByModel: {[key in CarModel]: number[]} = {
  // Toyota
  ['Vios']: [
    ...new Set([
      ...populateYears(2007, 2012),
      ...populateYears(2013, 2022),
    ])
  ],
  ['Veloz']: populateYears(2022, thisYear),
  ['Yaris']: populateYears(2013, thisYear),
  ['Yaris Ativ']: populateYears(2022, thisYear),
  ['Yaris Cross']: populateYears(2022, thisYear),
  ['Corolla Altis']: [
    ...new Set([
      ...populateYears(2013, 2016), // Gen 11
      ...populateYears(2016, thisYear), //Gen 12
    ])
   ],
  ['Corolla Cross']: populateYears(2022, thisYear),
  ['Camry']: populateYears(2013, thisYear),
  ['Fortuner']: populateYears(2013, thisYear),
  ['Innova']: populateYears(2013, thisYear),
  ['Hilux']: populateYears(2013, thisYear),
  ['Hiace']: populateYears(2013, thisYear),
  ['Alphard']: populateYears(2013, thisYear),
  // Honda
  ['City']: populateYears(2013, thisYear),
  ['Civic']: populateYears(2013, thisYear),
  ['CR-V']: populateYears(2013, thisYear),
  ['HR-V']: populateYears(2013, thisYear),
  ['BR-V']: populateYears(2013, thisYear),
  ['Accord']: populateYears(2013, thisYear),
  // Isuzu
  ['D-Max']: populateYears(2013, thisYear),
  ['MU-X']: populateYears(2013, thisYear),
  // Nissan
  ['Almera']: populateYears(2013, thisYear),
  ['Navara']: populateYears(2013, thisYear),
  ['Terra']: populateYears(2013, thisYear),
  // Hyundai
  ['H1']: populateYears(2013, thisYear),
  ['Staria']: populateYears(2022, thisYear),
  // Suzuki
  ['Swift']: populateYears(2013, thisYear),
  ['Other']: populateYears(2013, thisYear)
}

export default Object.freeze(CarYearsByModel);