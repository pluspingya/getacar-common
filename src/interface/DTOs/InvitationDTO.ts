import { AccountMembershipRole, InvitationStatus } from '../../domain';

type InvitationDTO = {
  id: string;
  email: string;
  accountId: string;
  accountMembershipRole: AccountMembershipRole;
  status: InvitationStatus;
  createdAt: string;
  updatedAt: string;
};

export default InvitationDTO;
