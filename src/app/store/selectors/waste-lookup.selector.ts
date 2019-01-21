import {
  MemoizedSelector,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromState from '../states';

export const getWasteLookupStateSelector: MemoizedSelector<
  any,
  fromState.WasteLookupState
> = createFeatureSelector<fromState.WasteLookupState>('wasteLookup');

export const getWasteLookupEntitiesSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  getWasteLookupStateSelector,
  fromState.getWasteLookupEntities
);

export const getWasteLookupIsLoadingSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  getWasteLookupStateSelector,
  fromState.getWasteLookupIsLoading
);
