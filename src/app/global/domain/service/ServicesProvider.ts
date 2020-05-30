import AuthService from '../../../authentication/domain/AuthService';
import FirebaseAuthService from '../../../authentication/infrastructure/service/FirebaseAuthService';

export default class ServicesProvider {
  private readonly _authService: AuthService;

  private static instance: ServicesProvider;

  static getInstance(): ServicesProvider {
    if (!this.instance) {
      this.instance = new ServicesProvider();
    }

    return this.instance;
  }

  private constructor() {
    this._authService = new FirebaseAuthService();
  }

  get authService(): AuthService {
    return this._authService;
  }
}
