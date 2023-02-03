import { expect, it } from "vitest";

// 如果參數不是一個物件，那optional的參數必須在後面
// 這樣寫會報錯：(last?: string, first: string)
// error: A required parameter cannot follow an optional parameter.
export const getName = (first: string, last?: string ) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

it("Should work with just the first name", () => {
  const name = getName("Matt");

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName("Matt", "Pocock");

  expect(name).toEqual("Matt Pocock");
});
