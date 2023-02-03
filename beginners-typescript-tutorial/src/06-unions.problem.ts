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
  role: string;
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // 下方註釋用法
  // TypeScript 會忽略下一行的錯誤。但如果沒有錯誤，TypeScript 就會提示程式碼中有不必要的註釋
  // `Unused '@ts-expect-error' directive`。
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
