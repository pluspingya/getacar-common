export enum AccountTier {
  FREE = 'FREE',
  SILVER = 'SILVER',
  BRONZE = 'BRONZE',
  GOLD = 'GOLD',
  PLATINUM = 'PLATINUM',
}

export enum AccountStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
}

export default interface AccountDTO {
  id: string;
  name: string;
  tier: AccountTier;
  status: AccountStatus;
  createdAt: string;
  updatedAt: string;
}
