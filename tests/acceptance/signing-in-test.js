import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'codeclub/tests/helpers/start-app';

var application;

module('Acceptance: Signing in', {
  beforeEach: function() {
    Firebase.prototype.authWithPassword = (credentials, callback) => {
      callback(null, 'authData');
    };
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('succesfully', function(assert) {
  visit('/');
  fillIn('input[name="email"]', 'hello@example.com');
  fillIn('input[name="password"]', 'password');
  click('button:contains("Log in")');
  andThen(() => {
    assert.ok(find(':contains("Logged in")').length,
      'expected to see "Logged in"');
  });
});
