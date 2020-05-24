import {
  AuthenticationState,
  SetAuthenticatedUserPayload,
  SET_AUTHENTICATED_USER,
} from './types';

export const initialState: AuthenticationState = {
  currentUser: null,
  ready: false,
};

export default function AuthenticationReducer(
  state = initialState,
  action: SetAuthenticatedUserPayload,
): AuthenticationState {
  if (action.type === SET_AUTHENTICATED_USER) {
    return {
      ...state,
      ready: true,
      currentUser: action.user,
    };
  } else {
    return state;
  }
}
