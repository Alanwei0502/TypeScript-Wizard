type MyExclude<U, Members> = U extends Members ? never : U;

type ID = string | number;
type Excluded = MyExclude<ID, string>; // number

export default {};
