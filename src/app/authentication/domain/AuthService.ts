import Credential from './Credential';
import {Observable} from 'rxjs';
import UserRegistrationInfo from '../infrastructure/model/UserRegistrationInfo';

export default interface AuthService {
  register(userRegistrationInfo: UserRegistrationInfo): Promise<void>;
  signIn(credential: Credential): Promise<void>;
  signOut(): Promise<void>;
  getCurrentUser(): any;
  isAuthenticated(): boolean;
  authStateChange: Observable<any>;
}
