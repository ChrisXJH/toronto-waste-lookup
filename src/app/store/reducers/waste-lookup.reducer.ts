import * as fromState from '../states';
import * as fromAction from '../actions';

export function WasteLookupReducer(
  state: fromState.WasteLookupState = fromState.initialWasteLookupState,
  action: fromAction.WasteLookupAction
) {
  switch (action.type) {
    case fromAction.GET_WASTE_DATA: {
      return { ...state, isLoading: true };
    }

    case fromAction.GET_WASTE_DATA_SUCCESS: {
      const wasteLookupEntities = action.payload;
      return { ...state, wasteLookupEntities, isLoading: false };
    }

    case fromAction.GET_WASTE_DATA_FAILURE: {
      return { ...state, isLoading: false };
    }
  }
  return state;
}
