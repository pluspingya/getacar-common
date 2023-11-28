export default class Result<T> {
  isSuccess: boolean;
  isFailure: boolean;
  private readonly error: Error;
  private readonly value: T;

  constructor(isSuccess: boolean, error?: Error | string, value?: T) {
    if (isSuccess && error) {
      throw new Error('InvalidOperation: A result cannot be successful and contain an error');
    }
    if (!isSuccess && !error) {
      throw new Error('InvalidOperation: A failing result needs to contain an error message');
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error as Error;
    this.value = value as T;

    Object.freeze(this);
  }

  getValue(): T {
    if (!this.isSuccess) {
      throw new Error("Can't get the value of an error result. Use 'getError' instead.");
    }
    return this.value;
  }

  getError(): Error {
    if (!this.isFailure) {
      throw new Error("Can't get the error of a success result. Use 'getValue' instead.");
    }
    return this.error;
  }

  static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, undefined, value);
  }

  static fail<U>(error?: Error | string): Result<U> {
    if (typeof error === 'string') {
      error = new Error(error);
    }
    return new Result<U>(false, error);
  }

  static combine(results: Result<any>[]): Result<any> {
    for (const result of results) {
      if (result.isFailure) return result;
    }
    return Result.ok();
  }
}
