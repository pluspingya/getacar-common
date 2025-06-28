import { AccountMembershipRole } from '../../domain';

type InvitationDTO = {
  id: string;
  email: string;
  accountId: string;
  accountMembershipRole: AccountMembershipRole;
  createdAt: string;
  updatedAt: string;
};

export default InvitationDTO;
