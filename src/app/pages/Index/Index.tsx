// eslint-disable-next-line no-use-before-define
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../store/reducers';

const Index = () => {
  const { accessToken } = useSelector((state: RootState) => state.mainReducer);

  if (!accessToken) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      root component
    </div>
  );
};

export default Index;
