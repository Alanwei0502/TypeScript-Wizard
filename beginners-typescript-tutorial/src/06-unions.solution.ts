interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: "admin" | "user" | "super-admin";
}

// 也可以給一個 Type Alias
type Role = "admin" | "user" | "super-admin";

// 當聯合型別很多種類時，可以這樣寫，稍微增加可讀性
type Name = 
  | 'Alan'
  | 'Tina'
  | 'Ben'
  | 'Luke';

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
