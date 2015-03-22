import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'codeclub/tests/helpers/start-app';

let application;
let firebase;

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
