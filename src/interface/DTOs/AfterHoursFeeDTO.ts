export default interface AfterHoursFeeDTO {
  type: 'before' | 'after';
  offsetHours: number | null;
  fee: number;
}