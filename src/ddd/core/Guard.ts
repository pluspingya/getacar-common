import Result from './Result';

export interface GuardArgument {
  argument: any;
  argumentName: string;
}

export type GuardArgumentCollection = GuardArgument[];

export default class Guard {
  static combine(guardResults: Result<void>[]): Result<void> {
    const errorResults = [];
    for (const result of guardResults) {
      if (result.isFailure) {
        errorResults.push(result);
      }
    }
    if (errorResults.length > 0) {
      return Result.fail(errorResults.map((item) => item.getError()).join('; '));
    }
    return Result.ok();
  }

  static againstNullOrUndefined(argumentName: string, argument: any): Result<void> {
    if (argument === null || argument === undefined) {
      return Result.fail(`${argumentName} is ${JSON.stringify(argument)}`);
    }
    return Result.ok();
  }

  static againstNullOrUndefinedBulk(args: GuardArgumentCollection): Result<void> {
    return Guard.combine(args.map((arg) => this.againstNullOrUndefined(arg.argumentName, arg.argument)));
  }

  static againstNullOrUndefinedFields<T, K extends (keyof T & string)[]>(fieldNames: K, value: T): Result<void> {
    return Guard.againstNullOrUndefinedBulk(
      fieldNames.map((fieldName) => ({
        argument: value[fieldName],
        argumentName: fieldName,
      })),
    );
  }

  static againstUnallowedValue(argumentName: string, allowedValues: any[], value: any): Result<void> {
    if (!allowedValues.includes(value)) {
      return Result.fail(`${argumentName} value ${value} is not one of the expected values in ${JSON.stringify(allowedValues)}`);
    }
    return Result.ok();
  }

  static againstEmptyString(argumentName: string, value: string): Result<void> {
    if (value.trim() === '') {
      return Result.fail(`${argumentName} cannot be an empty string`);
    }
    return Result.ok();
  }

  static againstEmptyStringBulk(args: GuardArgumentCollection): Result<void> {
    return Guard.combine(args.map((arg) => this.againstEmptyString(arg.argumentName, arg.argument)));
  }

  static againstEmptyStringFields<T, K extends (keyof T & string)[]>(fieldNames: K, value: T): Result<void> {
    return Guard.againstEmptyStringBulk(
      fieldNames.map((fieldName) => ({
        argument: value[fieldName],
        argumentName: fieldName,
      })),
    );
  }
}
