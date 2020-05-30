import AuthService from '../domain/AuthService';
import ServicesProvider from '../../global/domain/service/ServicesProvider';
import UserRegistrationInfo from '../infrastructure/model/UserRegistrationInfo';

export default class UserRegistrationUseCase {
  private authService: AuthService;

  constructor() {
    this.authService = ServicesProvider.getInstance().authService;
  }

  register(userRegistrationInfo: UserRegistrationInfo): Promise<void> {
    return this.authService.register(userRegistrationInfo);
  }
}
