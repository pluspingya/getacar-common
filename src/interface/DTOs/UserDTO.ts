import AccountMembershipDTO from './AccountMembershipDTO';

type UserDTO = {
  id: string;
  name: string;
  email: string;
  verified: boolean;
  activeMembershipId: string;
  memberships: AccountMembershipDTO[];
  createdAt: string;
  updatedAt: string;
}

export default UserDTO;
