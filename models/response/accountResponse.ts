export default interface AccountResponse {
  id: string;
  name: string;
  email?: string;
  age?: number;
}

export interface Artist {
  id: number;
  name: string;
  last_name: string;
  address: string;
  phone: string;
}
