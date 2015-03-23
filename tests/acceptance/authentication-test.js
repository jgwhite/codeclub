import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

let firebase;
let application;

module('Acceptance: Authentication', {
  beforeEach: function() {
    firebase = new MockFirebase();
    application = startApp({ firebase: firebase });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('success', function(assert) {
  firebase.authWithPassword = ({ email, password }, callback) => {
    assert.equal(email, 'hello@example.com');
    assert.equal(password, 'password');

    let authData = { uid: 'testUid' };

    firebase.changeAuthState(authData);
    firebase.flush();

    callback(null, authData);
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

test('failure', function(assert) {
  firebase.authWithPassword = (_, callback) => {
    let error = new Error('The specified password is incorrect');
    callback(error);
  };

  visit('/');
  fillIn('input[name="email"]', 'hello@example.com');
  fillIn('input[name="password"]', 'password');
  click('button:contains("Log in")');
  andThen(() => {
    assert.ok(find(':contains("The specified password is incorrect")').length,
      'expected to see "The specified password is incorrect"');
  });
});
