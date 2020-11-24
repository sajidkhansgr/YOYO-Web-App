export interface Folder {
  id: number;
  name: string;
  workspaceId: number;
  // createdDate: string;
  // updatedDate: string;
  // createdBy: string;
  // updatedBy: string;
  description: string;
  hideLabelInWorkspace: boolean;
  folderIconPath: string;
  folderIcon: string;
  folderId: number;
  isActive: boolean;
  sortAscending?: boolean;
  limitNoOfFiles?: number;
  fileTypeIds?: string;
  propertyIds?: string;
  tagIds?: string;
  localeIds?: string;
  authorIds?: string;
  smartFolderTags?: Array<any>;
  smartFolderFilters?: Array<any>;
  key?: string;
}
