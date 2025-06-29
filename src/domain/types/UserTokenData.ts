import { AccountMembershipRole, ShopMembershipRole } from '../enums';
import MinimizedAccountMembership from './MinimizedAccountMembership';

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
  accountMemberships: MinimizedAccountMembership[];
  shopMemberships: {
    id: string;
    shopId: string;
    shopName: string;
    role: ShopMembershipRole;
  }[];
}

export default UserTokenData;