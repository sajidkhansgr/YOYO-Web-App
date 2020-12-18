export class AppSettings {
  // ---- USER ---- //

  public static LOGIN = `api/User/Login`;

  public static CHANGE_PASS = `api/User/ChangePassword`;

  public static FORG_PASS = `api/User/ForgotPassword`;

  public static RESET_PASS = `api/User/ResetPassword`; //get and post method both

  public static CREATE_PASS = `api/User/CreatePassword`;

  // ---- HUB ---- //

  public static LIST_HUB = `api/Hub/GetAll`;

  public static ADD_HUB = `api/Hub/Add`;

  public static UPD_HUB = `api/Hub/Update`;

  public static GET_HUB = `api/Hub/GetById`;

  public static ACT_HUB = `api/Hub/Activate`;

  public static DEACT_HUB = `api/Hub/Deactivate`;

  // ---- GROUP ---- //

  public static LIST_GRP = `api/Group/GetAll`;

  public static ADD_GRP = `api/Group/Add`;

  public static UPD_GRP = `api/Group/Update`;

  public static GET_GRP = `api/Group/GetById`;

  public static DEACT_GRP = `api/Group/Deactivate`;

  public static ACT_GRP = `api/Group/Activate`;

  // ---- TAG ---- //

  public static LIST_TAG = `api/Tag/GetAll`;

  public static ADD_TAG = `api/Tag/AddBulk`;

  public static UPD_TAG = `api/Tag/Update`;

  public static GET_TAG = `api/Tag/GetById`;

  public static DEACT_TAG = `api/Tag/Deactivate`;

  public static ACT_TAG = `api/Tag/Activate`;

  // ---- WORKSPACE ---- //

  public static LIST_WRKSPC = `api/Workspace/GetAll`;

  public static ADD_WRKSPC = `api/Workspace/Add`;

  public static UPD_WRKSPC = `api/Workspace/Update`;

  public static GET_WRKSPC = `api/Workspace/GetById`;

  public static DEACT_WRKSPC = `api/Workspace/Deactivate`;

  public static ACT_WRKSPC = `api/Workspace/Activate`;

  public static GET_WRKSPC_EMP = `api/Workspace/GetAllByEmployee`;

  public static LIST_USR_GRP_WRKSPC = `api/Workspace/GetUserAndGroupList`;

  public static ADD_USR_GRP_WRKSPC = `api/Workspace/AddUserAndGroupToWorkspace`;

  public static REM_USR_GRP_WRKSPC = `api/Workspace/RemoveUserOrGroupFromWorkspace`;

  public static GET_DATA_WRKSPC = 'api/Workspace/GetDataByWorkspace';

  public static GET_DATA_WRKSPC_EMP = 'api/Workspace/GetDataByWorkspaceByEmployee';

  public static REARR_WRKSPC_ITEMS = `api/Workspace/RearrangeWorkspaceData`;

  // ---- FOLDER ---- //

  public static LIST_FLDR_WRKSPC = `api/Folder/GetAllByWorkspace`;

  public static ADD_FLDR = `api/Folder/Add`;

  public static ADD_CONT_FLDR = `api/Folder/AddContentToFolder`;

  public static UPD_FLDR = `api/Folder/Update`;

  public static GET_FLDR = `api/Folder/GetById`;

  public static DEACT_FLDR = `api/Folder/Deactivate`;

  public static ACT_FLDR = `api/Folder/Activate`;

  public static ADD_FLDR_EMPL = `api/Folder/AddFolderByEmployee`;

  public static UPD_FLDR_EMPL = `api/Folder/UpdateFolderByEmployee`;

  public static DUPL_FLDR = `api/Folder/Duplicate`;

  // ---- SMART FOLDER ---- //

  public static LIST_SMT_FLDR_WRKSPC = `api/SmartFolder/GetAllByWorkspace`;

  public static ADD_SMT_FLDR = `api/SmartFolder/Add`;

  public static UPD_SMT_FLDR = `api/SmartFolder/Update`;

  public static GET_SMT_FLDR = `api/SmartFolder/GetById`;

  public static DEACT_SMT_FLDR = `api/SmartFolder/Deactivate`;

  public static ACT_SMT_FLDR = `api/SmartFolder/Activate`;

  public static DUPL_SMT_FLDR = `api/SmartFolder/Duplicate`;

  // ---- CATEGORY ---- //

  public static LIST_CATG = `api/Category/GetAll`;

  public static ADD_CATG = `api/Category/Add`;

  public static UPD_CATG = `api/Category/Update`;

  public static GET_CATG = `api/Category/GetById`;

  public static DEACT_CATG = `api/Category/Deactivate`;

  public static ACT_CATG = `api/Category/Activate`;

  // ---- NOTIFICATION ---- //

  public static NOTIFICATIONS = `api/Notification/EmployeeNotifications`;


  // ---- ANNOTATION ---- //

  public static LIST_ANNOT = `api/Annotation/GetAll`;

  public static ADD_ANNOT = `/api/Annotation/Add`;

  // ---- ANNOUNCEMENT ---- //

  public static LIST_ANCMNT = `api/Announcement/GetAll`;

  public static ADD_ANCMNT = `api/Announcement/Add`;

  public static UPD_ANCMNT = `api/Announcement/Update`;

  public static GET_ANCMNT = (id: string) => `api/Announcement/GetById/${id}`;

  public static ARCH_ANCMNT = (id: string) => `api/Announcement/${id}/Archive`;

  // ---- EMPLOYEE ---- //

  public static LIST_EMPL = `api/Employee/GetAll`;

  public static ADD_EMPL = `api/Employee/Add`;

  public static UPD_EMPL = `api/Employee/Update`;

  public static GET_EMPL = `api/Employee/GetById`;

  public static RESEND_INV = `api/Employee/ResendInvitation`;

  // ---- CONTENT ---- //

  public static LIST_CNTNT = `api/Content/GetAll`;

  public static ADD_CNTNT = `api/Content/Add`;

  public static UPD_CNTNT = `api/Content/Update`;

  public static GET_CNTNT = `api/Content/GetById`;

  public static ADD_CMNT_CNTNT = `api/Content/AddCommentToContent`;

  public static DEL_CNTNT = `api/Content/Delete`;

  public static UPD_CNTNT_STATUS = `api/Content/UpdateContentStatus`;

  public static MY_FILES = `api/Content/GetMyContent`;

  public static GET_CNTNT_FLDR = `api/Content/GetContentByWorkspaceFolder`;

  public static GET_CNTNT_SMT_FLDR = `api/Content/GetContentBySmartFolder`;

  public static UPL_VER_CNTNT = `api/Content/UploadNewVersion`;

  public static ADD_CNTNT_WRKSPC = `api/Content/AddContentToWorkspaceFolder`;

  public static ADD_CNTNT_EMPL = `api/Content/AddContentByEmployee`;

  public static PROC_CNTNT_CNT = `api/Content/ProcessingContentCount`;

  public static PROC_CNTNT = `api/Content/GetProcessingContentDetails`;

  public static PROC_CNTNT_EMPL = `api/Content/GetProcessingContentByEmployee`;

  public static START_PROC_CNTNT = `api/Content/StartContentProcessing`;

  public static CANCEL_PROC_CNTNT = `api/Content/CancelContentProcessing`;

  // ---- LANGUAGE ---- //

  public static LIST_LNG = `api/Language/GetAll`;

  // ---- COLLECTION ---- //

  public static LIST_COLCT = `api/Collection/GetAll`;

  public static ADD_COLCT = `api/Collection/Add`;

  public static REN_COLCT = `api/Collection/Rename`;

  public static DUPL_COLCT = `api/Collection/Duplicate`;

  public static DEL_COLCT = `api/Collection/Delete`;

  public static BULK_DEL_COLCT = `api/Collection/DeleteCollections`;

  public static GET_COLCT = `api/Collection/GetById`;

  public static ACT_COLCT = `api/Collection/Activate`;

  public static DEACT_COLCT = `api/Collection/Deactivate`;

  public static ADD_CONTENT_COLCT = `api/Collection/AddContent`;

  public static GET_CONTENT_COLCT = `api/Collection/GetContentByCollection`;

  public static REM_CONTENT_COLCT = `api/Collection/RemoveFromCollection`;

  public static REARR_CNTNT_COLCT = `api/Collection/ReArrangeCollectionData`;

  // ---- BREADCRUM ---- //

  public static BRD_CRM_LIST = `api/BreadCrum/GetBreadCrum`;

  public static MY_BRD_CRM_LIST = `api/BreadCrum/GetBreadCrumForMyContent`; //my files
  // ---- COMMON ---- //

  public static SEND_MAIL = `api/Common/SendEmail`;

  // ---- COMMON ---- //

  public static ADD_SHARE = `api/Share/Add`;

  public static DEL_SHARE = `api/Share/Delete`;

  public static GET_SHARE_LNK = `api/Share/GetContentByIdentifier`;
}
