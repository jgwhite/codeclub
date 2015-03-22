import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

let firebase;
let application;

module('Acceptance: <%= humanModuleName %>', {
  beforeEach: function() {
    firebase = new MockFirebase();
    application = startApp({ firebase: firebase });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('success', function(assert) {
  visit('/');
});

test('failure', function(assert) {
  visit('/');
});
