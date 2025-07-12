import SupportedLanguageCode from '../../domain/types/SupportedLanguageCode';
import AccountMembershipDTO from './AccountMembershipDTO';
import ShopMembershipDTO from './ShopMembershipDTO';

type UserDTO = {
  id: string;
  name: string;
  email: string;
  verified: boolean;
  activeAccountMembershipId: string | null;
  activeAccountMembership: AccountMembershipDTO | null | undefined;
  accountMemberships: AccountMembershipDTO[] | undefined;
  shopMemberships: ShopMembershipDTO[] | undefined;
  languageCode: SupportedLanguageCode;
  createdAt: string;
  updatedAt: string;
}

export default UserDTO;
