import Ember from 'ember';

let { Component, computed } = Ember;

export default Component.extend({
  tagName: 'form',

  model: computed(function() {
    return {};
  }),

  submit(event) {
    let model = this.get('model');

    event.preventDefault();
    this.sendAction('onsubmit', model);
    this.resetModel();
  },

  resetModel() {
    this.set('model', {});
  }
});
