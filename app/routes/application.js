import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  actions: {
    authenticate() {
      let ref = new Firebase(config.firebase);
    }
  }
});
