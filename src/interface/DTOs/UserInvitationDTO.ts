import { MembershipRole } from '../../domain';

type UserInvitationDTO = {
  id: string;
  email: string;
  accountId: string;
  membershipRole: MembershipRole;
  createdAt: string;
  updatedAt: string;
};

export default UserInvitationDTO;
