import { CurrentUser, GETJWTACCESS, RootActionsTypes } from '../actions/types';

interface MainReducerInitState {
  accessToken: string | undefined;
  currentUser: CurrentUser | undefined
}

const initialState: MainReducerInitState = {
  accessToken: undefined,
  currentUser: undefined,
};

export const mainReducer = (
  state = initialState, action: RootActionsTypes,
): MainReducerInitState => {
  switch (action.type) {
    case GETJWTACCESS:
      return {
        ...state,
        accessToken: action.payload,
      };
    default:
      return state;
  }
};
