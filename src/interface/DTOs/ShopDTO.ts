import AddressDTO from './AddressDTO';

type ShopDTO = {
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

export default ShopDTO;