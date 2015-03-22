import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  actions: {
    authenticate() {
      let controller = this.controllerFor('application');
      let credentials = controller.getProperties('email', 'password');
      let ref = new Firebase(config.firebase);

      ref.authWithPassword(credentials, (error, authData) => {
        if (error) {
          throw new Error(error);
        } else {
          controller.set('authData', authData);
          controller.set('authenticated', true);
        }
      });
    }
  }
});
