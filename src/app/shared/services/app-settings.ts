export class AppSettings {
  // ---- USER ---- //

  public static LOGIN = `api/User/Login`;

  public static CHANGE_PASS = `api/User/ChangePassword`;

  public static FORG_PASS = `api/User/ForgotPassword`;

  public static RESET_PASS = `api/User/ResetPassword`; //get and post method both

  // ---- HUB ---- //

  public static LIST_HUB = `api/Hub/GetAll`;

  public static ADD_HUB = `api/Hub/Add`;

  public static UPD_HUB = `api/Hub/Update`;

  public static GET_HUB = `api/Hub/GetById`;

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

  // ---- FOLDER ---- //

  public static LIST_FLDR_WRKSPC = `api/Folder/GetAllByWorkspace`;

  public static ADD_FLDR = `api/Folder/Add`;

  public static ADD_CONT_FLDR = `api/Folder/AddContentToFolder`;

  public static UPD_FLDR = `api/Folder/Update`;

  public static GET_FLDR = `api/Folder/GetById`;

  public static DEACT_FLDR = `api/Folder/Deactivate`;

  public static ACT_FLDR = `api/Folder/Activate`;

  // ---- SMART FOLDER ---- //

  public static LIST_SMT_FLDR_WRKSPC = `api/SmartFolder/GetAllByWorkspace`;

  public static ADD_SMT_FLDR = `api/SmartFolder/Add`;

  public static UPD_SMT_FLDR = `api/SmartFolder/Update`;

  public static GET_SMT_FLDR = `api/SmartFolder/GetById`;

  public static DEACT_SMT_FLDR = `api/SmartFolder/Deactivate`;

  public static ACT_SMT_FLDR = `api/SmartFolder/Activate`;

  // ---- CATEGORY ---- //

  public static LIST_CATG = `api/Category/GetAll`;

  public static ADD_CATG = `api/Category/Add`;

  public static UPD_CATG = `api/Category/Update`;

  public static GET_CATG = `api/Category/GetById`;

  public static DEACT_CATG = `api/Category/Deactivate`;

  public static ACT_CATG = `api/Category/Activate`;


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

  // ---- CONTENT ---- //

  public static LIST_CNTNT = `api/Content/GetAll`;

  public static ADD_CNTNT = `api/Content/Add`;

  public static UPD_CNTNT = `api/Content/Update`;

  public static GET_CNTNT = `api/Content/GetById`;

  // Language
  public static LIST_LNG = `api/Language/GetAll`;

  // ---- COLLECTION ---- //

  public static LIST_COLCT = `api/Collection/GetAll`;

  public static ADD_COLCT = `api/Collection/Add`;

  public static ADD_CONTENT_COLCT = `api/Collection/AddContent`;

  public static GET_CONTENT_COLCT = `api/Collection/GetContentByCollection`;

  public static REN_COLCT = `api/Collection/Rename`;

  public static DUPL_COLCT = `api/Collection/Duplicate`;

  public static DEL_COLCT = `api/Collection/Delete`;

  public static GET_COLCT = `api/Collection/GetById`;

  public static REM_COLCT = `api/Collection/RemoveFromCollection`;
}
