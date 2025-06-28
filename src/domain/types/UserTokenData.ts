import { AccountMembershipRole, ShopMembershipRole } from '../enums';

export type UserTokenData = {
  id: string;
  email: string;
  name: string;
  activeAccountMembership: {
    accountId: string;
    accountName: string;
    role: AccountMembershipRole;
  } | null;
  shopMemberships: {
    shopId: string;
    shopName: string;
    role: ShopMembershipRole;
  }[];
}

export default UserTokenData;