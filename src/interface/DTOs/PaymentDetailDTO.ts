import PaymentMethod from '../../domain/enums/PaymentMethod';

type PaymentDetailDTO = {
  id: string;
  method: PaymentMethod;
  accountId: string;
  name: string;
  data: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export default PaymentDetailDTO;