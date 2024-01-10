export interface Employee {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  mobile: string;
  address: string;
  contract: Contract;
}
export interface Contract {
  id: number;
  contractType: string;
  startDate: string;
  endDate: string;
  ongoing: boolean;
  fullTime: string;
  hours: number;
}
