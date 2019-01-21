export interface WasteLookupState {
  wasteLookupEntities: any;
  isLoading: boolean;
}

export const initialWasteLookupState: WasteLookupState = {
  wasteLookupEntities: [],
  isLoading: false
};

export const getWasteLookupEntities = (state: WasteLookupState) =>
  state.wasteLookupEntities;

export const getWasteLookupIsLoading = (state: WasteLookupState) =>
  state.isLoading;
