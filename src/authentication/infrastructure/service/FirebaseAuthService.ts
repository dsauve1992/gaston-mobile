import firebase from 'firebase/app';
import 'firebase/auth';
import AuthService from '../../domain/AuthService';
import EmailPasswordCredential from '../model/EmailPasswordCredential';
import {Observable} from 'rxjs';
import UserRegistrationInfo from '../model/UserRegistrationInfo';

export default class FirebaseAuthService implements AuthService {
  private currentUser: any;
  public authStateChange: Observable<any>;

  constructor() {
    this.authStateChange = new Observable<any>((subscriber) => {
      firebase.auth().onAuthStateChanged(subscriber);
    });
  }

  async register(userRegistrationInfo: UserRegistrationInfo): Promise<void> {
    const {username, email, password} = userRegistrationInfo;

    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    this.currentUser = userCredential.user;

    return this.currentUser.updateProfile({
      displayName: username,
    });
  }

  signIn(credential: EmailPasswordCredential): Promise<void> {
    const {email, password} = credential.get();

    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials: firebase.auth.UserCredential) => {
        this.currentUser = userCredentials.user;
        console.log(this.currentUser.displayName);
      });
  }

  signOut(): Promise<void> {
    return firebase
      .auth()
      .signOut()
      .then((response) => {
        this.currentUser = undefined;
        return response;
      });
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }
}
