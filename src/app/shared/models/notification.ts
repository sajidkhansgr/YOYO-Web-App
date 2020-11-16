export class NotificationDto {
  public id: number = 0;
  public employeeId: number = 0;
  public isRead: boolean = false;
  public createdDate: Date = new Date();
  public createdBy : number = 0;
  public subject: string = '';
  public description: string = '';
}
