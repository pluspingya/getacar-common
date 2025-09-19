import InvoiceStatus from '../../domain/enums/InvoiceStatus';
import AccountDTO from './AccountDTO';
import BillDTO from './BillDTO';
import ShopDTO from './ShopDTO';

type InvoiceDTO = {
  id: string;
  name: string;
  amount: number;
  vat: number;
  totalAmount: number;
  totalPaid: number;
  totalOutstanding: number;
  status: InvoiceStatus;
  dueDate: string;
  accountId: string;
  accountName: string;
  account: AccountDTO | undefined;
  shopId: string;
  shopName: string;
  shop: ShopDTO | undefined;
  billId: string;
  billName: string;
  bill: BillDTO | undefined;
  createdAt: string;
  updatedAt: string;
}

export default InvoiceDTO;