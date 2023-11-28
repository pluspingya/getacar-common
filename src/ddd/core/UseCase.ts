export default interface UseCase<InputType, OutputType> {
  execute(input: InputType): Promise<OutputType> | OutputType;
}
