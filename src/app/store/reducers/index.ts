import { combineReducers } from 'redux';
import { mainReducer } from './main-reducer';

export const rootReducer = combineReducers({
  mainReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
