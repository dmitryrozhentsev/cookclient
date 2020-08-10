import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';

export namespace CookActions {
  export enum Type {
    GET_COOKS = 'GET_COOKS'
  }
  export const getCooks = createAction(Type.GET_COOKS);
}

export type TodoActions = Omit<typeof CookActions, 'Type'>;
export const useCookActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = CookActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as TodoActions;
};
