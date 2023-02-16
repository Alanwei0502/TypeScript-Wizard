// 利用 Exclude 和 extends 這兩個工具
type MyNonNullable<T> = ??;

type NullableID = string | number | null;
type ID = MyNonNullable<NullableID>; // string | number

export default {};
