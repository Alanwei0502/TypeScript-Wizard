type MyExclude<U, Members> = ??;

type ID = string | number;

type Excluded = MyExclude<ID, string>;