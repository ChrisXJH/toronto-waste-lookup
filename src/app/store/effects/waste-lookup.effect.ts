import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import { DataService } from '../../services';

import * as fromAction from '../actions';

@Injectable()
export class WasteLookupEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  @Effect()
  getWasteData$: Observable<any> = this.actions$.pipe(
    ofType(fromAction.GET_WASTE_DATA),
    switchMap((action: any) =>
      this.dataService.searchWaste(action.payload).pipe(
        map(data => new fromAction.GetWasteDataSuccess(data)),
        catchError(() => of(new fromAction.GetWasteDataFailure()))
      )
    )
  );
}
