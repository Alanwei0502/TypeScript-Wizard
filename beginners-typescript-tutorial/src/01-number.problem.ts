import { expect, it } from "vitest";

export const addTwoNumbers = (a, b) => {
  // error: Parameter 'a' implicitly has an 'any' type.
  // error: Parameter 'b' implicitly has an 'any' type.
  return a + b;
};

it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});
