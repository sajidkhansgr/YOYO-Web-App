const LMT_PAGE: Array<number> = [10, 20, 30];

const DEF_IMG: string = "assets/images/def-img.png";

const DEF_ICON: string = "assets/images/def-icon.png";

const PRPS: Array<any> = [{id:1,name: "Anonymized"},{id:2,name: "Not Assigned to an experience"},{id:3,name: "Not Assigned to a Division"},
  {id:4,name: "No members"}];

const TIME: Array<any> = ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00",
"13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"];

const GRP_TYPE: Array<any> = [{v:1,n: "All Users"},{v:2,n: "Selected Workspaces"},{v:3,n: "Selected User Groups"}];
//"Super admin" = 1,
enum ROLES {
  "Admin"=2, "User"
}
// const ROLES: Array<any> = [{v:2,n: USR_ROLES[2]},{v:3,n: USR_ROLES[3]}];

enum LNGS {
  "English" = 1, "German", "French", "Spanish", "Dutch", "Italian", "Japanese", "Chinese(China)",
}
// const LNGS: Array<any> = [{v:1,n: USR_LNGS[1]},{v:2,n: USR_ROLES[2]}];

enum EMP_STATUS {
  "Active" = 1, "Inactive", "Invited"
}

enum ANCMT_STATUS {
  "Sent" = 1, "Scheduled", "Archived"
}

export {LMT_PAGE, DEF_IMG, PRPS, DEF_ICON, TIME, GRP_TYPE, ROLES, EMP_STATUS, ANCMT_STATUS, LNGS};
