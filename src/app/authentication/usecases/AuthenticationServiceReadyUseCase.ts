import AuthService from '../domain/AuthService';
import Application from '../../global/Application';

export default class AuthenticationServiceReadyUseCase {
  private authService: AuthService;

  constructor() {
    this.authService = Application.getInstance().authService;
  }

  isReady(): boolean {
    return this.authService.isReady();
  }
}
