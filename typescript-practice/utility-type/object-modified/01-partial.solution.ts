type PartPartial<
  Obj extends Record<any, any>,
  EssentialKeys extends keyof Obj
> = Partial<Pick<Obj, EssentialKeys>> &
  Pick<Obj, Exclude<keyof Obj, EssentialKeys>>;

type UserData = Record<'a' | 'b' | 'c' | 'd', string>;
type PartPartialUserData = PartPartial<UserData, 'a' | 'b'>;

// 結果
// type PartPartialUserData = {
//   a?: string;
//   b?: string;
//   c: string;
//   d: string;
// }

const partPartialUserData1: PartPartialUserData = {
  c: 'c',
  d: 'd',
};

// error: 'c' is necessary.
// const partPartialUserData2: PartPartialUserData = {
//   a: 'a',
//   d: 'd',
// };

export default {};
