import { combineReducers } from 'redux';
import { RootState } from './state';
import { CookReducer } from './cooks';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  cooks: CookReducer
});
