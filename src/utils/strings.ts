import jsonata from 'jsonata';
import { DateTime } from 'luxon';

export type DataObject = { [key: string]: any };

export function substitute(template: string, data: DataObject): string {
  return template.replace(/{([\w.]+)}/g, (_, path: string) => {
    const value = path.split('.').reduce((obj, key) => {
      return obj?.[key];
    }, data);

    return value !== undefined && value !== null ? String(value) : '';
  });
}

function isDate(value: any): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}

export async function substituteWithJSONata(template: string, data: DataObject): Promise<string> {
  const regex = /\{([^}]+)\}/g;
  const matches = [...template.matchAll(regex)];
  const replacements = await Promise.all(
    matches.map(async ([match, path]) => {
      let value = undefined;
      try {
        const expression = jsonata(path);
        value = await expression.evaluate(data);
      } catch (error) {
      }
      return {
        match,
        replacement: value !== undefined && value !== null 
          ? isDate(value) 
            ? DateTime
              .fromJSDate(value)
              .setZone(data.timezone || 'UTC+7')
              .toFormat(data.dateTimeFormat || 'yyyy-MM-dd HH:mm') 
            : String(value) 
          : ''
      };
    })
  );
  let result = template;
  for (const { match, replacement } of replacements) {
    result = result.replace(match, replacement);
  }
  return result;
}

export function truncate(text: string, length: number = 100, suffix: string = '...'): string {
  if (text.length <= length) {
    return text;
  }
  return text.slice(0, length - suffix.length) + suffix;
}