import { expect, it } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
// 在建立這個物件的時候，就給予型別的限制，如果不符合，TypeScript 會在這裡就給予錯誤提示
const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  isAdmin: true,
};

const getUserId = (user: User) => {
  return user.id;
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
