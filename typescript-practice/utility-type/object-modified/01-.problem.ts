type PartPartial<Obj, K extends keyof Obj> = ??;

type UserData = Record<'a' | 'b' | 'c'| 'd', string>;

type PartPartialUserData = PartPartial<UserData, 'a' | 'b'>;
// type PartPartialUserData = {
//   a?: string;
//   b?: string;
//   c: string;
//   d: string;
// }

export default {};