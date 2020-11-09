export interface User {
  id: number;
  email: string;
  password: string | null;
  firstName: string;
  lastName: string;
  roleId: number;
  languageId: number;
  employeeStatus: number;
  lastLoginTimestamp: number;
  deviceModel: string;
  osUsed: string;
  letEmployeeCreatePassword: boolean;
  sendLoginInstructionEmail: boolean;
  enforceEmployeePasswordReset: boolean;
}
