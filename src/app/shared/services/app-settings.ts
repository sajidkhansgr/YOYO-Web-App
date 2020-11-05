export class AppSettings {

  public static LOGIN = `api/User/Login`;

  public static CHANGE_PASS = `api/User/ChangePassword`;

  public static LIST_HUB = `api/Hub/GetAll`;

  public static ADD_HUB = `api/Hub/Add`;

  public static UPD_HUB = `api/Hub/Update`;

  public static GET_HUB = `api/Hub/GetById`;

  public static LIST_GRP = `api/Group/GetAll`;

  public static ADD_GRP = `api/Group/Add`;

  public static UPD_GRP = `api/Group/Update`;

  public static GET_GRP = `api/Group/GetById`;

  public static LIST_TAG = `api/Tag/GetAll`;

  public static ADD_TAG = `api/Tag/AddBulk`;

  public static UPD_TAG = `api/Tag/Update`;

  public static GET_TAG = `api/Tag/GetById`;

  public static DEACT_TAG = `api/Tag/Deactivate`;

  public static ACT_TAG = `api/Tag/Activate`;

  public static LIST_WRKSPC = `api/Workspace/GetAll`;

  public static ADD_WRKSPC = `api/Workspace/Add`;

  public static UPD_WRKSPC = `api/Workspace/Update`;

  public static GET_WRKSPC = `api/Workspace/GetById`;

  public static LIST_FLDR_WRKSPC = `api/Folder/GetAllByWorkspace`;

  public static ADD_FLDR = `api/Folder/Add`;

  public static ADD_CONT_FLDR = `api/Folder/AddContentToFolder`;

  public static UPD_FLDR = `api/Folder/Update`;

  public static DEL_FLDR = `api/Folder/Delete`;

  public static GET_FLDR = `api/Folder/GetById`;

  public static LIST_CATG = `api/Category/GetAll`;

  public static ADD_CATG = `api/Category/Add`;

  public static UPD_CATG = `api/Category/Update`;

  public static GET_CATG = `api/Category/GetById`;

  public static DEACT_CATG = `api/Category/Deactivate`;

  public static ACT_CATG = `api/Category/Activate`;

  public static LIST_ANNOT = `api/Annotation/GetAll`;

  public static ADD_ANNOT = `/api/Annotation/Add`;

  public static LIST_ANNCMNT = `api/Announcement/GetAll`;

  public static ADD_ANNCMNT = `api/Announcement/Add`;

  public static UPD_ANNCMNT = `api/Announcement/Update`;

  public static GET_ANNCMNT = `api/Announcement/GetById`;

  public static FORG_PASS = `api/User/ForgotPassword`;

  public static RESET_PASS = `api/User/PasswordReset`; //get and post method both
}
