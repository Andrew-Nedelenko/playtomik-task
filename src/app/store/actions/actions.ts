import { Dispatch } from 'react';
import { getApiAccess, GETJWTACCESS } from './types';

export const getAccessToken = (email: string, password: string) => async (dispatch: Dispatch<getApiAccess>) => {
  const req = await fetch('http://localhost:5700/user/jwt/login', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (req.status === 200) {
    const json = await req.json();
    console.log(json.accessToken);
    return dispatch({
      type: GETJWTACCESS,
      payload: json.accessToken,
    });
  }
  const json = await req.json();
  return new Promise((res, rej) => {
    rej(json.error);
  });
};
