import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { CookActions } from '../actions';
import { CookModel } from '../models';

const initialState: RootState.CookState = [];
export const CookReducer = handleActions<RootState.CookState, CookModel[]>(
  {
    [CookActions.Type.GET_COOKS]: (state, action) => {
        if (action.payload) {
            return action.payload
        }
        return state;
    }
  },
  initialState
);
