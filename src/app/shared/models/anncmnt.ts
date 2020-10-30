export interface Anncmnt {
  id: number;
  subject: string;
  body: string;
  notifyByEmail: boolean;
  requestToUpdate: boolean;
  sendLater: boolean;
  sendToGroup: number;
  recipients: Array<number>;
  scheduledOn: string;
}
