import Ember from 'ember';

let { inject } = Ember;

export default Ember.Route.extend({
  firebase: inject.service(),

  beforeModel() {
    let firebase = this.get('firebase');

    if (!firebase.getAuth()) {
      this.transitionTo('authenticate');
    }
  },

  actions: {
    logout() {
      let firebase = this.get('firebase');

      firebase.unauth();

      this.transitionTo('authenticate');
    }
  }
});
