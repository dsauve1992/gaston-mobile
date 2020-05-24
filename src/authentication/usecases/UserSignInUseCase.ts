import AuthService from '../domain/AuthService';
import Credential from '../domain/Credential';
import ServicesProvider from '../../global/domain/service/ServicesProvider';

export default class UserSignInUseCase {
  private authService: AuthService;

  constructor() {
    this.authService = ServicesProvider.getInstance().authService;
  }

  signIn(credentials: Credential): Promise<void> {
    return this.authService.signIn(credentials);
  }

  isSignedIn(): boolean {
    return this.authService.isAuthenticated();
  }
}
