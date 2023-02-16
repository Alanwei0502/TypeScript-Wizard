type NullableDataList = null | any[] | never;

type DataList = NonNullable<NullableDataList>;

// 實作
type MyNonNullable<T> = T & {};

export default {};
