export type SeqList<T extends (number | string)[] = string[]> = {
  seqName: string;
  seqs: T;
};

// export type SeqList<T extends (number | string)[] = number[]> = {
//   seqName: string;
//   seqs: T;
// };