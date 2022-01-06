import { IMake } from '../components/FormRegisterCar/index';
export interface InputAttributes {
  id: string;
  label: string;
  name?: string;
  placeholder?: string;
  type?: string;
  min?: string;
  component?: string;
  inputError?: boolean;
  defaultText?: string;
  multiple?: boolean;
  options?: (number | string | IMake)[];
}
