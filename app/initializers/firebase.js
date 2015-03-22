import config from '../config/environment';

export function initialize(container, application) {
  let firebase = application.firebase || new Firebase(config.firebase);

  application.register('service:firebase', firebase, { instantiate: false });
  application.inject('route', 'firebase', 'service:firebase');
  application.inject('adapter', 'firebase', 'service:firebase');
}

export default {
  name: 'firebase',
  initialize: initialize
};
