import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

let { computed } = Ember;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,

  firebase: computed(function() {
    return new Firebase(config.firebase);
  })
});

loadInitializers(App, config.modulePrefix);

export default App;
