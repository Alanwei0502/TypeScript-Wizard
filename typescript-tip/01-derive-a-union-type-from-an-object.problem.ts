export const fruitCount = {
  apple: 1,
  pear: 4,
  banana: 26,
};

type SingleFruitCount =
  | { apple: number }
  | { banana: number }
  | { pear: number };

const singleFruitCount: SingleFruitCount = {
  banana: 12,
};

// 透過物件fruitCount，實作出一個union type型別，取代SingleFruitCount土法煉鋼的寫法
