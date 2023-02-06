// 給予預設型別
export type SeqList<T extends (number | string)[] = ??> = {
  seqName: string;
  seqs: T;
};