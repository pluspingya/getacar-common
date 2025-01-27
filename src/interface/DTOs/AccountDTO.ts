import AccountTier from '../../domain/enums/AccountTier';
import AccountStatus from '../../domain/enums/AccountStatus';

type AccountDTO = {
  id: string;
  name: string;
  tier: AccountTier;
  status: AccountStatus;
  createdAt: string;
  updatedAt: string;
}

export default AccountDTO;
