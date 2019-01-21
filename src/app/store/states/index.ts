import { WasteLookupState } from './waste-lookup.state';
import { FavouritesState } from './favourites.state';

export * from './waste-lookup.state';
export * from './favourites.state';

export interface StoreState {
  wasteLookup: WasteLookupState;
  favourites: FavouritesState;
}
