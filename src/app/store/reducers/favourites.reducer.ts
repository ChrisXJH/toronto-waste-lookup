import * as fromState from '../states';
import * as fromAction from '../actions';

export function FavouritesReducer(
  state: fromState.FavouritesState = fromState.initialFavouritesState,
  action: fromAction.FavouritesAction
) {
  switch (action.type) {
    case fromAction.REMOVE_FAVOURITE:
    case fromAction.ADD_FAVOURITE: {
      return { ...state, isLoading: true };
    }

    case fromAction.UPDATE_FAVOURITE_SUCCESS: {
      const favouritesEntities = action.payload;
      return { ...state, favouritesEntities, isLoading: false };
    }

    case fromAction.UPDATE_FAVOURITE_FAILURE: {
      return { ...state, isLoading: false };
    }
  }
  return state;
}
