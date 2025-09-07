export default interface AfterHoursFeeDTO {
  type: 'before' | 'after';
  offsetHours: number | undefined;
  fee: number;
}