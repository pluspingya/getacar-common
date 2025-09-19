import BillLineCategory from '../../domain/enums/BillLineCategory';
import CommissionDataDTO from './CommissionDataDTO';

type BillLineDTO = {
  id: string;
  category: BillLineCategory;
  data: CommissionDataDTO;
  chargeRate: number;
  chargeQty: number;
  chargeTotal: number;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export default BillLineDTO;