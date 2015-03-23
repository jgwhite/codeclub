import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'form',

  model: computed(function() {
    return {};
  }),

  submit(event) {
    event.preventDefault();

    let model = this.get('model');

    this.sendAction('onsubmit', model);
  }
});
