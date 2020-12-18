import { Dispatch } from 'react';
import {
  GetApiAccess, GETJWTACCESS, GETUSERDATA, GetUserData,
} from './types/main-types';

export const getAccessToken = (email: string, password: string) => async (dispatch: Dispatch<GetApiAccess>) => {
  const req = await fetch(`${process.env.APIURI}/user/jwt/login`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (req.status === 200) {
    const json = await req.json();
    dispatch({
      type: GETJWTACCESS,
      payload: json.accessToken,
    });
    sessionStorage.setItem('token', json.accessToken);
    return new Promise((res) => {
      res(json.accessToken);
    });
  }
  const json = await req.json();
  return new Promise((res, rej) => {
    rej(json.error);
  });
};

export const existToken = (token: string | null) => async (dispatch: Dispatch<GetApiAccess>) => {
  if (!token) {
    return new Promise((_, rej) => {
      rej();
    });
  }
  return dispatch({
    type: GETJWTACCESS,
    payload: token,
  });
};

export const getUserDataAction = (token: string) => async (dispatch: Dispatch<GetUserData>) => {
  const req = await fetch(`${process.env.APIURI}/user/jwt/profile`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (req.status === 200) {
    const json = await req.json();
    console.log(json, 'userdata');
    dispatch({
      type: GETUSERDATA,
      payload: json[0],
    });
  }
};
