import store from '../../global/adapters/store';
import setAuthenticatedUser from './actions';
import ServicesProvider from '../../global/domain/service/ServicesProvider';

export default class AuthenticationBootstraper {
  private static instance: AuthenticationBootstraper;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new AuthenticationBootstraper();
    }

    return this.instance;
  }

  boot() {
    const authService = ServicesProvider.getInstance().authService;

    authService.authStateChange.subscribe((user) => {
      store.dispatch(setAuthenticatedUser(user));
    });
  }
}
