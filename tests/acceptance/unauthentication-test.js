import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

let firebase;
let application;

module('Acceptance: Unauthentication', {
  beforeEach: function() {
    firebase = new MockFirebase();
    application = startApp({ firebase: firebase });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('success', function(assert) {
  firebase.changeAuthState({ uid: 'testUid' });
  firebase.flush();

  visit('/');
  click('button:contains("Log out")');
  andThen(function(){
    assert.ok(find(':contains("Email:")').length,
      'expected to see the login form');
  });
});
