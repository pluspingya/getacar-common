import { createId } from '@paralleldrive/cuid2';

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity;
}

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
}
