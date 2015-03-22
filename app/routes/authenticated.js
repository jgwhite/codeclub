import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    let application = this.container.lookup('application:main');
    let firebase = application.get('firebase');

    if (!firebase.getAuth()) {
      this.transitionTo('authenticate');
    }
  }
});
