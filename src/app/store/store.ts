import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const initialState = {};

const middleware = [thunk];

const composeEnhancers = process.env.NODE_ENV === 'production'
  ? compose
  // @ts-ignore
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);
