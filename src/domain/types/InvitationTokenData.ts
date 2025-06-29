import { AccountMembershipRole } from '../enums';

type InvitationTokenData = {
  invitation: {
    id: string;
    email: string;
    accountId: string;
    accountMembershipRole: AccountMembershipRole;
  },
  userExists: boolean;
}

export default InvitationTokenData;