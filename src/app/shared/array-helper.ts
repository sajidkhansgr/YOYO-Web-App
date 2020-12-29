export class ArrayHelper {

  public static moveItem(array: any, from: number, to: number){
    const copy = [...array];
    copy.splice(from, 1);
    copy.splice(to, 0, array[from]);
    return copy;
  }

}
