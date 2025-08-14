
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { parse } from 'csv-parse/sync';
import { writeArrayConst, writeObjectConst } from './utils';

const csvFilePath = join(__dirname, '../../getacar-assets/Get A Car 24 Co. Ltd. - Bank Options.csv');
const csvData = readFileSync(csvFilePath);
const records = parse(csvData, {
  columns: true,
  skip_empty_lines: true
});

type BankRecord = {
  English: string;
  Thai: string;
  Abbreviation: string;
};

const bankCodes = new Set<string>();
const bankLabels = new Map<string, { en: string; th: string }>();

for (const record of records) {
  const { English, Thai, Abbreviation } = record as BankRecord;
  bankCodes.add(Abbreviation);
  bankLabels[Abbreviation] = {
    en: English,
    th: Thai
  };
}

writeArrayConst('BankCodes', bankCodes);
