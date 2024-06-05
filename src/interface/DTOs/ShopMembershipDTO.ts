export enum ShopMembershipRole {
  MANAGER = 'MANAGER',
  STAFF = 'STAFF',
}

export default class ShopMembershipDTO {
  id: string;
  accountId: string;
  shopId: string;
  userId: string;
  role: ShopMembershipRole
  createdAt: string;
}