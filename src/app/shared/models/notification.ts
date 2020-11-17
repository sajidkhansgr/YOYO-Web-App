export interface Notification {
  id: number;
  employeeId: number;
  isRead: boolean;
  createdDate: Date;
  createdBy: number;
  subject: string;
  description: string;
}
