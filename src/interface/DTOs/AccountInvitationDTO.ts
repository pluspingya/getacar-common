import { AccountMembershipRole } from '../../domain';

type AccountInvitationDTO = {
  id: string;
  email: string;
  accountId: string;
  accountMembershipRole: AccountMembershipRole;
  createdAt: string;
  updatedAt: string;
};

export default AccountInvitationDTO;
