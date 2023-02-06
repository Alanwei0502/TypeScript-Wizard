export function compose(...arg: any[]) {
  return {} as any;
}

const addOne = (a: number) => {
  return a + 1;
};

const numToString = (a: number) => {
  return a.toString();
};

const stringToNum = (a: string) => {
  return parseInt(a);
};

// 請寫出一個compose function 來達到下面的功能
const addOneToString1 = compose(addOne); // (input: number) => number
const addOneToString2 = compose(addOne, numToString); // (input: number) => string
const addOneToString3 = compose(addOne, numToString, stringToNum); // (input: number) => number
