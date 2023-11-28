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
}
