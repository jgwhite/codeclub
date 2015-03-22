import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authenticate() {
      let controller = this.controllerFor('application');
      let credentials = controller.getProperties('email', 'password');
      let adapter = this.container.lookup('adapter:application');
      let firebase = adapter.get('firebase');

      firebase.authWithPassword(credentials, error => {
        if (error) {
          throw new Error(error);
        } else {
          controller.set('authenticated', true);
        }
      });
    }
  }
});
