interface EnumItem<E> { n: E; v: keyof E; }

export class EnumHelper{

  public static enumToArray<E>(Enum: any): any {
      return Object.keys(Enum)
      .filter( value => isNaN(Number(value)) === false)
      .map(key => ({n: Enum[key], v: parseInt(key)} as EnumItem<E>))
  }

}
