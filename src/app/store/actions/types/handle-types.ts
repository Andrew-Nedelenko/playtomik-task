export const ONPENDING = 'ONPENDING';
export const ONSTART = 'ONSTART';
export const ONFINISH = 'ONFINISH';
export const ONERROR = 'ONERROR';
export const ONMESSAGE = 'ONMESSAGE';

export interface OnPendingInterface {
  type: typeof ONPENDING;
  payload: boolean;
}

export interface OnStartInterface {
  type: typeof ONSTART;
  payload: boolean
}

export interface OnFinishInterface {
  type: typeof ONFINISH;
  payload: boolean
}

export interface OnErrorInterface {
  type: typeof ONERROR;
  payload: string
}

export interface OnMessageInterface {
  type: typeof ONMESSAGE;
  payload: string
}

export type HandleActionsTypes = OnPendingInterface
| OnStartInterface
| OnFinishInterface
| OnErrorInterface
| OnMessageInterface
