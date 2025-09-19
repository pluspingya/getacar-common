import { AccountTier } from '../../domain';
import BillProgram from '../../domain/enums/BillProgram';
import BillStatus from '../../domain/enums/BillStatus';
import AccountDTO from './AccountDTO';
import BillLineDTO from './BillLineDTO';
import ShopDTO from './ShopDTO';

type BillDTO = {
  id: string;
  name: string;
  program: BillProgram;
  periodStart: string;
  periodEnd: string;
  status: BillStatus;
  total: number;
  billLines: BillLineDTO[] | undefined;
  calculatedAt: string | null;
  accountId: string;
  accountName: string;
  accountTier: AccountTier;
  account: AccountDTO | undefined;
  shopId: string;
  shopName: string;
  shop: ShopDTO | undefined;
  createdAt: string;
  updatedAt: string;
}

export default BillDTO;