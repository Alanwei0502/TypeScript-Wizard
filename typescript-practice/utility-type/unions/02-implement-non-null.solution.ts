// 利用 Exclude 和 extends 這兩個工具
// type MyNonNullable<T> = Exclude<T, undefined | null>; // Good

type MyNonNullable<T> = T extends null
  ? Exclude<T, null>
  : T extends undefined
  ? Exclude<T, undefined>
  : T;

type NullableID = string | number | null | undefined;
type ID = MyNonNullable<NullableID>; // string | number

export default {};
