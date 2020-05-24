import Credential from '../../domain/Credential';

export default class EmailPasswordCredential implements Credential {
  constructor(private email: string, private password: string) {}

  get(): any {
    return {email: this.email, password: this.password};
  }
}
