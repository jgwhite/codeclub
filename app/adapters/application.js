import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

let { inject } = Ember;

export default FirebaseAdapter.extend({
  firebase: inject.service()
});
