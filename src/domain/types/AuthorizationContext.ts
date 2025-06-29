import AccountMembershipRole from '../enums/AccountMembershipRole';
import UserTokenData from './UserTokenData';

type AuthorizationContext = UserTokenData & {
  activeAccountMembership: {
    accountId: string;
    accountName: string;
    role: AccountMembershipRole;
  };
  iat: number;
  exp: number;
};

export default AuthorizationContext;