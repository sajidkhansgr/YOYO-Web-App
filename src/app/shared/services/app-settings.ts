export class AppSettings {

  public static LOGIN = `api/Account/Login`;

  public static CHANGE_PASS = `api/Account/ChangePassword`;

  public static LIST_CATG = `api/FoodCategory/GetAll`;

  public static GET_CATG = `api/FoodCategory/GetById`;

  public static ADD_CATG = `api/FoodCategory/Create`;

  public static UPD_CATG = `api/FoodCategory/Update`;

  public static LIST_SUB_CATG = `api/FoodSubCategory/GetAll`;

  public static GET_SUB_CATG = `api/FoodSubCategory/GetById`;

  public static ADD_SUB_CATG = `api/FoodSubCategory/Create`;

  public static UPD_SUB_CATG = `api/FoodSubCategory/Update`;

  public static LIST_FOOD = `api/FoodDetail/GetAll`;

  public static GET_FOOD = `api/FoodDetail/GetById`;

  public static ADD_FOOD = `api/FoodDetail/Create`;

  public static UPD_FOOD = `api/FoodDetail/Update`;

  public static LIST_FOOD_BY_CATG = `api/FoodDetail/GetAllByCategoryId`;

  public static LIST_FOOD_BY_SUB_CATG = `api/FoodDetail/GetAllBySubCategoryId`;

  public static LIST_EXCH = `api/FoodExchange/GetAll`;

  public static ENB_DIS_FOOD = `api/FoodDetail/EnableDisableFood`;

  public static LIST_FOOD_BY_IDS = `api/FoodDetail/GetFoodByIds`;

}
