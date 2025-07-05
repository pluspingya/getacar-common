import { AccountMembershipRole, InvitationStatus } from '../../domain';

type InvitationDTO = {
  id: string;
  email: string;
  accountId: string;
  accountMembershipRole: AccountMembershipRole;
  userExists: boolean;
  status: InvitationStatus;
  createdAt: string;
  updatedAt: string;
};

export default InvitationDTO;
