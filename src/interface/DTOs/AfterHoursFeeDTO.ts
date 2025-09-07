export default interface AfterHoursFeeDTO {
  type: 'before' | 'after';
  offsetHours?: number;
  fee: number;
}