type ValueA = {
  key: string;
  value: number;
};
type NodeA = {
  root: ValueA;
  children: NodeA[];
};

type ValueB = {
  key: string;
  value: string[];
};
type NodeB = {
  root: ValueB;
  children: NodeB[];
};

// 泛型
// type Value<> = ???
// type Node<> = ???

export {};