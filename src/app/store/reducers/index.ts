import { combineReducers } from 'redux';
import { mainReducer } from './main-reducer';
import { handleReducer } from './handle-reducer';

export const rootReducer = combineReducers({
  mainReducer,
  handleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
