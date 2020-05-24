import {SET_AUTHENTICATED_USER, SetAuthenticatedUserPayload} from './types';

export default function setAuthenticatedUser(
  user: any,
): SetAuthenticatedUserPayload {
  return {
    type: SET_AUTHENTICATED_USER,
    user,
  };
}
