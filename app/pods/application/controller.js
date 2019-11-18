import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  session: inject(),

  actions: {
    login() {
      const  authOptions  = {
        responseType:  'token id_token',
        scope:  'openid email profile'
      }

      this.session.authenticate(
        'authenticator:auth0-lock',
        authOptions
      );
    },

    logout() {
      this.session.invalidate()
    }
  }
});
