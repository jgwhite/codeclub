import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.firebase.getAuth()) {
      this.transitionTo('authenticate');
    }
  },

  actions: {
    logout() {
      this.firebase.unauth();
      this.transitionTo('authenticate');
    }
  }
});
