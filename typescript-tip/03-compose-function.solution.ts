export function compose<Input, FirstArg>(
  func1: (input: Input) => FirstArg
): (input: Input) => FirstArg;

export function compose<Input, FirstArg, SecondArg>(
  func1: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg
): (input: Input) => SecondArg;

export function compose<Input, FirstArg, SecondArg, ThirdArg>(
  func1: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg,
  func3: (input: SecondArg) => ThirdArg
): (input: Input) => ThirdArg;

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

const addOneToString1 = compose(addOne); // (input: number) => number
const addOneToString2 = compose(addOne, numToString); // (input: number) => string
const addOneToString3 = compose(addOne, numToString, stringToNum); // (input: number) => number
