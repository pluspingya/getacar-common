import ShopMembershipRole from '../../domain/enums/ShopMembershipRole';

export default class ShopMembershipDTO {
  id: string;
  accountId: string;
  shopId: string;
  userId: string;
  role: ShopMembershipRole
  createdAt: string;
}