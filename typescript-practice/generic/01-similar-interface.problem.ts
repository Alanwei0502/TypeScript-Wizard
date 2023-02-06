export interface DataA {
  id: string;
  key: string;
  value: string;
}

export interface DataB {
  id: string;
  key: string;
  value: number;
}

export interface DataC {
  id: string;
  key: string;
  value: string[];
}

// 請寫出上述 interface 泛型，並重構
interface DataG {}