import { expect, it } from "vitest";

type AddTwoNumbersArgs = {
  first: number;
  second: number;
};

export const addTwoNumbers = (params: AddTwoNumbersArgs) => {
  return params.first + params.second;
};

// 如果參數型別錯誤時，會這樣報錯，範例：
// Argument of type 'number' is not assignable to parameter of type 'AddTwoNumbersArgs'.
// Interface 和 Type Alias 的好處是，報錯時會告訴你不符合的型別名稱：AddTwoNumbersArgs
it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
