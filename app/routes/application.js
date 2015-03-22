import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authenticate(credentials) {
      let application = this.container.lookup('application:main');
      let firebase = application.get('firebase');

      firebase.authWithPassword(credentials, error => {
        if (error) {
          console.error('Failed to authenticate', error);
        } else {
          this.transitionTo('authenticated');
        }
      });
    }
  }
});
