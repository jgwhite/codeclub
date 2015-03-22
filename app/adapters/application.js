import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

let { computed } = Ember;

export default FirebaseAdapter.extend({
  firebase: computed(function() {
    let application = this.container.lookup('application:main');
    let firebase = application.get('firebase');

    return firebase;
  })
});
