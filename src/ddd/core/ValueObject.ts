export default abstract class ValueObject<PropsType> {
  constructor(protected readonly props: PropsType) {}

  equals(otherValueObject?: ValueObject<PropsType>): boolean {
    for(let key in otherValueObject.props) {
      if (this.props[key] !== otherValueObject.props[key]) {
        return false;
      }
    }
    return true;
  }
}