import {
  CurrentUser, GETJWTACCESS, GETUSERDATA, RootActionsTypes,
} from '../actions/types/main-types';

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
    case GETUSERDATA:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
