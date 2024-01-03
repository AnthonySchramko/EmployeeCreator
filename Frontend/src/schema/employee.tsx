export interface Employee {
  id: number;
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string;
  mobile: string;
  address: string;
  contract: Contract;
}
export interface Contract {
  id: number;
  contractType: boolean;
  startDate: string;
  endDate: string;
  ongoing: boolean;
  fullTime: boolean;
  hours: string;
}
