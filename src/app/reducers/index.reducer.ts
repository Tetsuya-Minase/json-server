import { createReducer, on } from '@ngrx/store';
import { fetchSuccess, getList } from '../actions/index.action';
import { JsonData } from '../model/JsonData';

export const initialState: JsonData[] = [];

const _reducer = createReducer(
  initialState,
  on(getList, state => [
    ...state,
    {
      name: 'test',
      data: {
        key: 'hoge',
        data: 'hoge',
      },
    },
  ]),
  on(fetchSuccess, (state, props) => [...state, ...props.response.list]),
);

export function reducer(state, action) {
  return _reducer(state, action);
}
