import { AccountMembershipRole, ShopMembershipRole } from '../enums';

export type UserTokenData = {
  id: string;
  email: string;
  name: string;
  activeAccountMembership?: {
    accountId: string;
    role: AccountMembershipRole;
  };
  shopMemberships: {
    shopId: string;
    role: ShopMembershipRole;
  }[];
}

export default UserTokenData;