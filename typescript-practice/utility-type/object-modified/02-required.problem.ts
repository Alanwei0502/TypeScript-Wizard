type PartRequired<Obj, K extends keyof Obj> = ??;

type UserData = Record<'a' | 'b' | 'c'| 'd', string>;
type PartRequiredUserData = PartRequired<UserData, 'a' | 'b'>;

// 結果
// type PartPartialUserData = {
//   a: string;
//   b: string;
//   c?: string;
//   d?: string;
// }

export default {};