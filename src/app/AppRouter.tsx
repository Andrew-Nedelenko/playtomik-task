// eslint-disable-next-line no-use-before-define
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import { Checktoken } from './layout/Checktoken';
import Loading from './layout/Loading';

const Index = lazy(() => import('./pages/Index/Index'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const Login = lazy(() => import('./pages/Login/Login'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

export const AppRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" exact component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
    <Checktoken />
  </BrowserRouter>
);
