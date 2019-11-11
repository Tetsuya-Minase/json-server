import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { HttpService } from '../service/http.service';
import { fetchError, fetchList, fetchSuccess } from '../actions/index.action';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { APIResponse } from '../../model/JsonData';
import { of } from 'rxjs';

@Injectable()
export class FetchEffects {
  constructor(private readonly actions$: Actions, private readonly httpService: HttpService) {
  }

  @Effect()
  fetchList$ = createEffect(() => this.actions$.pipe(
    ofType(fetchList),
    exhaustMap(action => this.httpService.fetch(action.url)
      .pipe(
        map((response: APIResponse) => fetchSuccess({response})),
        catchError(error => of(fetchError(error)))
      ))
  ));
}
