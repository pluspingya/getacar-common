import { AccountMembershipRole, ShopMembershipRole } from '../enums';
import LanguageCode from './LanguageCode';
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
    accountId: string;
    role: ShopMembershipRole;
  }[];
  languageCode: LanguageCode;
}

export default UserTokenData;