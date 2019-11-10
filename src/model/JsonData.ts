type JsonFeild = string | number | boolean | {[key: string]: string | number | boolean | object | any[]} | any[];

export type JsonDetail = {
  [key: string]: JsonFeild
};

export type JsonData = {
  name: string,
  data: JsonDetail,
};
