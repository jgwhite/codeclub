import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authenticate(credentials) {
      this.firebase.authWithPassword(credentials, error => {
        if (error) {
          console.error('Failed to authenticate', error);
        } else {
          this.transitionTo('authenticated');
        }
      });
    }
  }
});
