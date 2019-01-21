import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataService } from '../../services';

import * as fromAction from '../actions';

@Injectable()
export class FavouritesEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  @Effect()
  addFavourite$: Observable<any> = this.actions$.pipe(
    ofType(fromAction.ADD_FAVOURITE),
    map((action: any) => {
      this.dataService.addToFavourites(action.payload);
      return new fromAction.UpdateFavouriteSuccess(
        this.dataService.getFavourites()
      );
    })
  );

  @Effect()
  removeFavourite$: Observable<any> = this.actions$.pipe(
    ofType(fromAction.REMOVE_FAVOURITE),
    map((action: any) => {
      this.dataService.removeFromFavourites(action.payload);
      return new fromAction.UpdateFavouriteSuccess(
        this.dataService.getFavourites()
      );
    })
  );
}
