// export interface DataA {
//   id: string;
//   key: string;
//   value: string;
// }

// export interface DataB {
//   id: string;
//   key: string;
//   value: number;
// }

// export interface DataC {
//   id: string;
//   key: string;
//   value: string[];
// }

interface DataG<T> {
  id: string;
  key: string;
  value: T;
}

export type DataA = DataG<string>;
export type DataB = DataG<number>;
export type DataC = DataG<string[]>;
