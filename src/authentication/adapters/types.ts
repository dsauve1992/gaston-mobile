import {Action} from 'redux';

export type AuthenticationState = {
  currentUser: null | any;
  ready: boolean;
};

export const SET_AUTHENTICATED_USER = 'SET_AUTHENTICATED_USER';
export type SetAuthenticatedUser = typeof SET_AUTHENTICATED_USER;

export interface SetAuthenticatedUserPayload
  extends Action<SetAuthenticatedUser> {
  user: any;
}
