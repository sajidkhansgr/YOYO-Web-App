export interface User {
  id: number;
  email: string;
  password: string | null;
  firstName: string;
  lastName: string;
  name?: string; //for local
  roleId: number;
  role?: Role;
  status?: number;
  languageId: number;
  language?: any;
  employeeStatus: number;
  employeeGroups: number;
  lastLoginTimestamp: number;
  deviceModel: string;
  osUsed: string;
  timeZone? : string;
  letEmployeeCreatePassword: boolean;
  sendLoginInstructionEmail: boolean;
  enforceEmployeePasswordReset: boolean;
  latestActivity?: Date;
  createdDate?: Date;
}

export interface Role{
  id: number;
  name: string;
}

export interface Language{
  id: number;
  name: string;
}
