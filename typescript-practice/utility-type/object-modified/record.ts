// type StrObj = {
//   [key: string]: string;
// };
// 上述可以精簡成
type StrObj = Record<string, string>;

type DataKey = 'id' | 'username' | 'link';
type ApiData = Record<DataKey, string>;
// type ApiData = {
//   id: string;
//   username: string;
//   link: string;
// }

const apiData: ApiData = {
  id: '0',
  username: 'alan',
  link: 'https://...',
};

//實作
type MyRecord<K extends keyof any, V> = {
  [key in K]: V;
};
