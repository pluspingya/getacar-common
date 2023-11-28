import { createId } from '@paralleldrive/cuid2';

export default abstract class Entity<PropsType> {
  constructor(
    protected readonly props: PropsType,
    private readonly _id: string = createId(),
  ) {}

  get id(): string {
    return this._id;
  }
}
