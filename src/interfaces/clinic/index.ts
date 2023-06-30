import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ClinicInterface {
  id?: string;
  name: string;
  owner_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ClinicGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  owner_id?: string;
}
