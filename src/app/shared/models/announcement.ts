export interface Announcement {
  id: number;
  subject: string;
  body: string;
  notifyByEmail: boolean;
  requestToUpdate: boolean;
  sendLater: boolean;
  sendToGroup: number;
  recipients: Array<number>;
  scheduledOn: string;
  archivedOn?: string;
  deliveryStatus?: number;
  createdByFullName?:string;
  deliveredOn?:string;
  updatedDate?:string;
  createdDate?:string;
}
