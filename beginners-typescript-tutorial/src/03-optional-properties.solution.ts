import { expect, it } from "vitest";

// 當然也可以這樣寫：
// last: string | undefined
// 但即使不需要last參數，呼叫函數時還是要帶last參數，並給予undefined，用?是連給予都不用
export const getName = (params: { first: string; last?: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

it("Should work with just the first name", () => {
  const name = getName({
    first: "Matt",
  });

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName({
    first: "Matt",
    last: "Pocock",
  });

  expect(name).toEqual("Matt Pocock");
});
