export type DataObject = { [key: string]: any };

export function substitute(template: string, data: DataObject): string {
  return template.replace(/{([\w.]+)}/g, (_, path: string) => {
    const value = path.split('.').reduce((obj, key) => {
      return obj?.[key];
    }, data);

    return value !== undefined && value !== null ? String(value) : '';
  });
}

export function truncate(text: string, length: number = 100, suffix: string = '...'): string {
  if (text.length <= length) {
    return text;
  }
  return text.slice(0, length - suffix.length) + suffix;
}