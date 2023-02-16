type DataFromAPIList = string[];
type CountList = number[];
type Checked = boolean;

type UnionData = DataFromAPIList | CountList | Checked;
type DataList = Extract<UnionData, any[]>;

// 實作
type MyExtract<T, U> = T extends U ? T : never;

type ExtractedDataList = MyExtract<UnionData, any[]>;

interface Animal {
  eat(): void;
  sleep(): void;
}

interface Dog {
  eat(): void;
  sleep(): void;
  bark(): void;
  run(): void;
}

type isAnimal = Dog extends Animal ? true : false;
const boolean: isAnimal = true;

export default {};
