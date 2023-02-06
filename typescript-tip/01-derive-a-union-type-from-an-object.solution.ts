export const fruitCount = {
  apple: 1,
  pear: 4,
  banana: 26,
};

type SingleFruitCount =
  | { apple: number }
  | { banana: number }
  | { pear: number };

type FriutCounts = typeof fruitCount;

type NewSingleFruitCount = {
  [K in keyof FriutCounts]: {
    [K2 in K]: number;
  };
}[keyof FriutCounts];

const singleFruitCount: NewSingleFruitCount = {
  apple: 1,
  banana: 2,
  pear: 3,
};
