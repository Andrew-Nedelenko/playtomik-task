import { Dispatch } from 'react';
import { getApiAccess, GETJWTACCESS } from './types';

export const getAccessToken = (token: string) => async (dispatch: Dispatch<getApiAccess>) => {
  dispatch({
    type: GETJWTACCESS,
    payload: token,
  });
};
