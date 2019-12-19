import { createAction, props } from '@ngrx/store';
import { APIResponse } from '../../model/JsonData';

export const getList = createAction('GET_LIST');
export const fetchList = createAction('FETCH_LIST', props<{ url: string }>());
export const fetchSuccess = createAction('FETCH_SUCCESS', props<{ response: APIResponse }>());
export const fetchError = createAction('FETCH_ERROR', props<{ error: any }>());
export const register = createAction('REGISTER_DATA');
