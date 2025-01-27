import MembershipDTO from './MembershipDTO';

type UserDTO = {
  id: string;
  name: string;
  email: string;
  verified: boolean;
  activeMembershipId: string;
  memberships: MembershipDTO[];
  createdAt: string;
  updatedAt: string;
}

export default UserDTO;
