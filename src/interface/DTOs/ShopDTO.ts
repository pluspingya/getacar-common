import AddressDTO from './AddressDTO';

export default class ShopDTO {
  id: string;
  accountId: string;  
  name: string;
  address: AddressDTO;
  phone: string;
  email?: string;
  website?: string;
  logo?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}