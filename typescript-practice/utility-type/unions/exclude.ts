type ID = number | string;
type StrID = Exclude<ID, number>;

type Fn = (params: any) => string;
type Excluded = Exclude<StrID | Fn, Function>;

// 實作
type MyExtract<T, U> = T extends U ? never : T;

type A = 'a' | never;
type Never = 'b' & never;
type C = 'c' & {};

export default {};
