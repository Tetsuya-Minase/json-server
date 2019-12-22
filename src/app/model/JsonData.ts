type JsonField =
  | string
  | number
  | boolean
  | { [key: string]: string | number | boolean | object | any[] }
  | any[];

export type JsonDetail = {
  [key: string]: JsonField;
};

export type JsonData = {
  name: string;
  data: JsonDetail;
};

export type APIResponse = {
  list: JsonData[];
};
