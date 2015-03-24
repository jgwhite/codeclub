import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  flashes: inject.service('flash-messages')
});
