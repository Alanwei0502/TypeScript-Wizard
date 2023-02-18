type SomeObj = {
  a?: string; // optional
  b: number;
};

type Obj = Required<SomeObj>;

const obj: Obj = {
  b: 0,
  a: '',
};

// 實作
type MyRequired<Obj> = {
  [key in keyof Obj]: Obj[key];
};
