import { ActionReducerMap } from '@ngrx/store';

import { WasteLookupReducer } from './waste-lookup.reducer';
import { FavouritesReducer } from './favourites.reducer';

import * as fromState from '../states';

export * from './waste-lookup.reducer';

export const reducers: ActionReducerMap<fromState.StoreState> = {
  wasteLookup: WasteLookupReducer,
  favourites: FavouritesReducer
};
