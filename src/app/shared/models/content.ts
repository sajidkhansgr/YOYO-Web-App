export interface Content {
  id: number;
  name: string;
  isUrl: boolean;
  // urlIcon: binary;
  urlIconPath: boolean;
  url: string;
  description: boolean;
  // content: binary;
  contentType: number;//url,document,img,video
  documentType: number; //df,xls,doc,pt
  contentPath: string;
  pdfContentPath: string;
  pdf?: string; //used for local
  canBeShared: number;
  hubId: number;
  size: number;
  isActive: false,
  likes: number;
  contentTags: any; //Array
  comments?: Comment[];//Array
  contentLanguages: any;//Array
  contentWorkspaceFolders: any;//Array
  pdfImages: any;//Array
  createdDate: Date;
  updatedDate: Date;
  createdByFullName: string;
  updatedByFullName: string;
  createdBy: number;
  updatedBy: number;
  contentId?: number;
  pdfImage?: string;
  pdfImagePath?: string;
  pageNo?: string;//Array
  imagePath?: string;
}

export interface Comment {
  id?: number;
  commentText: string;
  createdByFullName: string;
  createdDate: Date;
  contentId?: number;
}
