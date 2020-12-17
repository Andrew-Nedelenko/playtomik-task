export const GETJWTACCESS = 'GETJWTACCESS';

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

export interface getApiAccess {
  type: typeof GETJWTACCESS;
  payload: string;
}

export type RootActionsTypes = getApiAccess
