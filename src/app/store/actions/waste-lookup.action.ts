import { Action } from '@ngrx/store';

export const GET_WASTE_DATA = '[Waste Lookup] Get Waste Data';
export const GET_WASTE_DATA_SUCCESS = '[Waste Lookup] Get Waste Data Success';
export const GET_WASTE_DATA_FAILURE = '[Waste Lookup] Get Waste Data Failure';

export class GetWasteData implements Action {
  readonly type = GET_WASTE_DATA;
  constructor(public payload: any) {}
}

export class GetWasteDataSuccess implements Action {
  readonly type = GET_WASTE_DATA_SUCCESS;
  constructor(public payload: any) {}
}

export class GetWasteDataFailure implements Action {
  readonly type = GET_WASTE_DATA_FAILURE;
  constructor() {}
}

export type WasteLookupAction =
  | GetWasteData
  | GetWasteDataSuccess
  | GetWasteDataFailure;
