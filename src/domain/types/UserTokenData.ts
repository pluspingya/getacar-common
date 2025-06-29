import { AccountMembershipRole, ShopMembershipRole } from '../enums';

export type UserTokenData = {
  id: string;
  email: string;
  name: string;
  activeAccountMembership: {
    id: string;
    accountId: string;
    accountName: string;
    role: AccountMembershipRole;
  } | null;
  accountMemberships: {
    id: string;
    accountId: string;
    accountName: string;
    role: AccountMembershipRole;
  }[];
  shopMemberships: {
    id: string;
    shopId: string;
    shopName: string;
    role: ShopMembershipRole;
  }[];
}

export default UserTokenData;