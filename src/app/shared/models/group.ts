export interface Group {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  createdDate: string;
  usersCount?: number;
  chk?: boolean //local use only
}
