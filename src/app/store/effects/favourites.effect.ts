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
      const newItem = action.payload;
      const favourites = this.dataService.getFavourites();
      return new fromAction.UpdateFavouriteSuccess({ newItem, favourites });
    })
  );

  @Effect()
  removeFavourite$: Observable<any> = this.actions$.pipe(
    ofType(fromAction.REMOVE_FAVOURITE),
    map((action: any) => {
      this.dataService.removeFromFavourites(action.payload);
      const favourites = this.dataService.getFavourites();
      const removedItem = action.payload;
      return new fromAction.UpdateFavouriteSuccess({ favourites, removedItem });
    })
  );
}
