import {
  MemoizedSelector,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromState from '../states';

export const getFavouritesStateSelector: MemoizedSelector<
  any,
  fromState.FavouritesState
> = createFeatureSelector<fromState.FavouritesState>('favourites');

export const getFavouritesEntitiesSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  getFavouritesStateSelector,
  fromState.getFavouritesEntities
);

export const getFavouritesIsLoadingSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  getFavouritesStateSelector,
  fromState.getFavouritesIsLoading
);
