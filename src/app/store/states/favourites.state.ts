export interface FavouritesState {
  favouritesEntities: any;
  isLoading: boolean;
}

export const initialFavouritesState: FavouritesState = {
  favouritesEntities: [],
  isLoading: false
};

export const getFavouritesEntities = (state: FavouritesState) =>
  state.favouritesEntities;

export const getFavouritesIsLoading = (state: FavouritesState) =>
  state.isLoading;
