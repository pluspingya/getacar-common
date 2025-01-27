import { createId } from '@paralleldrive/cuid2';
import Result from './Result';

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity;
}

const FIRST_CHAR_REGEXP = /^./;

const strToUpper = (s: string): string => (s || '').toUpperCase();

const toSetterName = (propName): string => `set${propName.replace(FIRST_CHAR_REGEXP, strToUpper)}`

type PropKey<SetterKey> = SetterKey extends `set${infer PropKey}` ? Uncapitalize<PropKey> : never;

type SetterInput<SetterFunction> = SetterFunction extends (value: infer ValueType) => any ? ValueType: never;

type SetterKeys<EntityTypeKeys> = Exclude<EntityTypeKeys extends `set${string}` ? EntityTypeKeys : never, 'set'>;

type InternalSetterMap<EntityType extends { [key in EntitySetterKeys]: any }, EntitySetterKeys extends string> = {
  [key in EntitySetterKeys as PropKey<key>]?: SetterInput<EntityType[key]>;
}

export type EntitySetterMap<EntityType> = InternalSetterMap<EntityType, SetterKeys<keyof EntityType>>;

export default abstract class Entity<PropsType> {
  constructor(
    protected readonly props: PropsType,
    private readonly _id: string = createId(),
  ) {}

  get id(): string {
    return this._id;
  }

  equals(otherEntity?: Entity<PropsType>): boolean {
    if (otherEntity === null || otherEntity === undefined) {
      return false;
    }
    if (this === otherEntity) {
      return true;
    }
    if (!isEntity(otherEntity)) {
      return false;
    }
    return this._id === otherEntity._id;
  }

  set(
    values: EntitySetterMap<this>, 
    onlySetKeys?: (keyof EntitySetterMap<this>)[]
  ): Result<void> {
    const targetKeys = onlySetKeys || Object.keys(values);
    const missingSetters = targetKeys.map(toSetterName).filter((setterName) => typeof this[setterName] !== 'function');
    if (missingSetters.length) return Result.fail(`There is no setter: ${missingSetters.join(', ')}`);
    for (const key of targetKeys) {
      const value = values[key];
      if (value === undefined) continue;
      const setterName = toSetterName(key);
      const result = this[setterName](value);
      if (result instanceof Result && result.isFailure) return result;
    }
    return Result.ok();
  }
}
