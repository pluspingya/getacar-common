import AccountMembershipRole from '../enums/AccountMembershipRole';

type MinimizedAccountMembership = {
  id: string;
  accountId: string;
  accountName: string;
  role: AccountMembershipRole;
}

export default MinimizedAccountMembership;

  