import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'codeclub/tests/helpers/start-app';

var application;

module('Acceptance: Authentication', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('success', function(assert) {
  let container = application.__container__;
  let adapter = container.lookup('adapter:application');
  let firebase = adapter.get('firebase');

  firebase.authWithPassword = (credentials, callback) => {
    assert.equal(credentials.email, 'hello@example.com');
    assert.equal(credentials.password, 'password');
    callback(null, 'auth data');
  };

  visit('/');
  fillIn('input[name="email"]', 'hello@example.com');
  fillIn('input[name="password"]', 'password');
  click('button:contains("Log in")');
  andThen(() => {
    assert.ok(find(':contains("Logged in")').length,
      'expected to see "Logged in"');
  });
});
