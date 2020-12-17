// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppRouter } from './AppRouter';
import { store } from './store/store';

export const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

render(<App />, document.querySelector('.root'));
