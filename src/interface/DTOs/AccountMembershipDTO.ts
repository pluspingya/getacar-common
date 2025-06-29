import { AccountMembershipRole } from '../../domain';

type AccountMembershipDTO = {
  id: string;
  accountId: string;
  accountName: string;
  userId: string;
  role: AccountMembershipRole;
  createdAt: string;
  updatedAt: string;
}

export default AccountMembershipDTO;