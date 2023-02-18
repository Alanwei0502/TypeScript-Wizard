type MyApiData = {
  id: string;
  username?: string;
};

type ReadonlyApiData = Readonly<MyApiData>;

const readonlyApiData: ReadonlyApiData = {
  id: '',
};

// 不可再重新指派值
// readonlyApiData.id = '123'; // error: Cannot assign to 'id' because it is a read-only property.

// 實作
type MyReadonly<Obj> = {
  readonly [key in keyof Obj]: Obj[key];
};

type MyReadonlyData = MyReadonly<MyApiData>;
