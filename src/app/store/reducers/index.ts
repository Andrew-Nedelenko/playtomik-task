import { combineReducers } from 'redux';
import { mainReducer } from './main-reducer';
import { errorReducer } from './error-reducer';

export const rootReducer = combineReducers({
  mainReducer,
  errorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
