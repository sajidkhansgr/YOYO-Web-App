export interface Group {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  createdDate: string;
  usersCount?: number;
}
