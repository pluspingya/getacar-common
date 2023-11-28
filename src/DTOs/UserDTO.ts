import MembershipDTO from './MembershipDTO';

export default interface UserDTO {
  id: string;
  name: string;
  email: string;
  verified: boolean;
  activeMembershipId: string;
  memberships: MembershipDTO[];
  createdAt: string;
  updatedAt: string;
}
