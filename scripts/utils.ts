import { writeFileSync } from 'fs';

export const writeArrayConst = (name: string, values: Set<any> | any[]) => {
  const output = `src/domain/consts/${name}.ts`;
  const content = `const ${name} = ${JSON.stringify(Array.isArray(values) ? values : Array.from(values))} as const;
export default Object.freeze(${name});`;
  writeFileSync(output, content);
  console.log(`Wrote ${name} to ${output}`);
};

export const writeObjectConst = ({
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