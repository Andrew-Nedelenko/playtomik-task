export const GETJWTACCESS = 'GETJWTACCESS';
export const GETUSERDATA = 'GETUSERDATA';

export interface CurrentUser {
  id: number,
  username: string,
  email: string,
  phone: string,
  password: string,
  ban: number,
  createdAt: string,
  updatedAt: string
}

export interface GetApiAccess {
  type: typeof GETJWTACCESS;
  payload: string | undefined;
}

export interface GetUserData {
  type: typeof GETUSERDATA;
  payload: CurrentUser
}

export type RootActionsTypes = GetApiAccess | GetUserData
