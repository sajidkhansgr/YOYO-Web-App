export interface Content {
  id: number;
  name: string;
  isUrl: boolean;
  // urlIcon: binary;
  urlIconPath: boolean;
  url: string;
  description: boolean;
  // content: binary;
  contentType: number;
  documentType: number;
  contentPath: string;
  pdfContentPath: string;
  canBeShared: number;
  hubId: number;
  size: number;
  isActive: false,
  likes: number;
  contentTags: any; //Array
  comments: any;//Array
  contentLanguages: any;//Array
  contentWorkspaceFolders: any;//Array
  pdfImages: any;//Array
  createdDate: Date;
  updatedDate: Date;
  createdByFullName: string;
  updatedByFullName: string;
  createdBy: number;
  updatedBy: number;
}
