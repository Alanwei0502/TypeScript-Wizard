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

// 使用分配律 => ‘a’ 是 'a' | 'c' 的子集合，回傳 'a'
type ExtractReturn2 = Extract<'a' | 'b', 'a' | 'c'>; // 'a'
// 未使用分配律 => ‘a' | 'b' 不是 'a' | 'c' 的子集合，回傳 'never'
type NoDistributeExtract<T, U> = [T] extends [U] ? T : never;
type NoDistributeExtractReturn2 = NoDistributeExtract<'a' | 'b', 'a' | 'c'>; // 'never'

export default {};
