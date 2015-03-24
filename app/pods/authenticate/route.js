import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  firebase: inject.service(),
  flashes: inject.service('flash-messages'),

  actions: {
    authenticate(credentials) {
      let firebase = this.get('firebase');
      let flashes = this.get('flashes');

      flashes.info('Authenticating');

      firebase.authWithPassword(credentials, error => {
        if (error) {
          flashes.warning(error.message);
        } else {
          this.transitionTo('authenticated');
        }
      });
    }
  }
});
