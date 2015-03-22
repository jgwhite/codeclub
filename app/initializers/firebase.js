export function initialize(container, application) {
  let firebase = application.get('firebase');

  if (firebase) {
    application.register('service:firebase', firebase, { instantiate: false });
    application.inject('route', 'firebase', 'service:firebase');
    application.inject('adapter', 'firebase', 'service:firebase');
  }
}

export default {
  name: 'firebase',
  initialize: initialize
};
