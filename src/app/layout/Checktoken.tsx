// eslint-disable-next-line no-use-before-define
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { existToken } from '../store/actions/main-actions';
import { RootState } from '../store/reducers';

export const Checktoken = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state: RootState) => state.mainReducer);
  if (!accessToken) {
    dispatch(existToken(sessionStorage.getItem('token')));
  }
  return (
    <></>
  );
};
