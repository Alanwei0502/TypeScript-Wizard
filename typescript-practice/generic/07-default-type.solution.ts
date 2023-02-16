// export type SeqList<T extends (number | string)[] = string[]> = {
//   seqName: string;
//   seqs: T;
// };

// export type SeqList<T extends (number | string)[] = number[]> = {
//   seqName: string;
//   seqs: T;
// };

// 或者兩個都給
export type SeqList<T extends (number | string)[] = (number | string)[]> = {
  seqName: string;
  seqs: T;
};
