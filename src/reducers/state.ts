import { CookModel } from '../models';

export interface RootState {
  cooks: RootState.CookState;
  router?: any;
}

export namespace RootState {
  export type CookState = CookModel[];
}
