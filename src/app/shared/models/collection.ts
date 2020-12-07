export interface Collection {
  id: number;
  name: string;
  collectionContents?:any;
  createdBy: string;
  updatedBy: string;
  updatedDate: string;
  createdDate: string;
  isActive: boolean;
  pdfImagePath?:string;
}
