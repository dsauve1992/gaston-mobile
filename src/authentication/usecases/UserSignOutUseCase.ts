import AuthService from '../domain/AuthService';
import ServicesProvider from '../../global/domain/service/ServicesProvider';

export default class UserSignOutUseCase {
  private authService: AuthService;

  constructor() {
    this.authService = ServicesProvider.getInstance().authService;
  }

  signOut(): Promise<void> {
    return this.authService.signOut();
  }
}
