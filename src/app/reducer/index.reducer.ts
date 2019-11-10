import { createReducer, on } from '@ngrx/store';
import { getList } from '../action/index.action';
import { JsonData } from '../../model/JsonData';

export const initialState: JsonData[] = [];

const _reducer = createReducer(initialState, on(getList, state => [...state, {
  name: 'test',
  data: {
    key: 'hoge',
    data: 'hoge'
  }
}]));

export function reducer(state, action) {
  return _reducer(state, action);
}
