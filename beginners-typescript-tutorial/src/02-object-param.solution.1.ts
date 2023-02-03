import { expect, it } from "vitest";

// 型別結尾可以用逗號，但最正確的方式是放分號
export const addTwoNumbers = (params: { first: number; second: number }) => {
  return params.first + params.second;
};

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
