import { UserInterface } from 'interfaces/user';
import { DoctorInterface } from 'interfaces/doctor';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  patient_id: string;
  doctor_id: string;
  date: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  doctor?: DoctorInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  doctor_id?: string;
}
