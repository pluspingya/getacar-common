import cloneDeep from 'lodash/cloneDeep';
import isPlainObject from 'lodash/isPlainObject';
import mapKeys from 'lodash/mapKeys';
import mapValues from 'lodash/mapValues';
import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';

type InputRecord = Record<string, any>;
type InputRecordObjectOrArray = InputRecord | InputRecord[];

export enum KeyCaseType {
  camelCase = 'camelCase',
  snakeCase = 'snakeCase',
}

export default function transformCaseKeys(obj: InputRecordObjectOrArray, keyCaseType: KeyCaseType = KeyCaseType.camelCase): any {
  let originalObj: InputRecordObjectOrArray = cloneDeep(obj);

  if (Array.isArray(originalObj)) {
    return originalObj.map((item: InputRecord) => transformCaseKeys(item, keyCaseType));
  } else if (!isPlainObject(originalObj)) {
    return originalObj;
  }

  originalObj = mapKeys(originalObj, (_value, key: string) =>
    keyCaseType === KeyCaseType.camelCase ? camelCase(key) : snakeCase(key),
  );

  return mapValues(originalObj, (value) => {
    if (isPlainObject(value)) {
      return transformCaseKeys(value, keyCaseType);
    } else if (Array.isArray(value)) {
      return (value as Array<any>).map((item) => transformCaseKeys(item, keyCaseType));
    }
    return value;
  });
};

