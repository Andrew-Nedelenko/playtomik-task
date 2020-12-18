// eslint-disable-next-line no-use-before-define
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../store/reducers';
import Navigation from '../Profile/components/Navigation';
import './index.scss';

const Index = () => {
  const { accessToken } = useSelector((state: RootState) => state.mainReducer);

  if (!accessToken) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="index-component">
      <p>Root component</p>
      <Navigation />
    </div>
  );
};

export default Index;
