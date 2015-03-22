import Ember from 'ember';

let { inject } = Ember;

export default Ember.Route.extend({
  firebase: inject.service(),

  actions: {
    authenticate(credentials) {
      let firebase = this.get('firebase');

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
