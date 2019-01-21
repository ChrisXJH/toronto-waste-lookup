import { Action } from '@ngrx/store';

export const ADD_FAVOURITE = '[Favourites] Add Favourite';
export const REMOVE_FAVOURITE = '[Favourites] Remove Favourite';
export const UPDATE_FAVOURITE_SUCCESS = '[Favourites] Update Favourite Success';
export const UPDATE_FAVOURITE_FAILURE = '[Favourites] Update Favourite Failure';

export class AddFavourite implements Action {
  readonly type = ADD_FAVOURITE;
  constructor(public payload: any) {}
}

export class RemoveFavourite implements Action {
  readonly type = REMOVE_FAVOURITE;
  constructor(public payload: any) {}
}

export class UpdateFavouriteSuccess implements Action {
  readonly type = UPDATE_FAVOURITE_SUCCESS;
  constructor(public payload: any) {}
}

export class UpdateFavouriteFailure implements Action {
  readonly type = UPDATE_FAVOURITE_FAILURE;
  constructor() {}
}

export type FavouritesAction =
  | AddFavourite
  | RemoveFavourite
  | UpdateFavouriteSuccess
  | UpdateFavouriteFailure;
