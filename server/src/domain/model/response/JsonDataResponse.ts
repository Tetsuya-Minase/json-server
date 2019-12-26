import { JsonDataValue } from '../object/JsonDataValue';

export type JsonDataResponse = {
  start: number;
  allCount: number;
  results: number;
  list: Array<JsonDataValue>;
};
