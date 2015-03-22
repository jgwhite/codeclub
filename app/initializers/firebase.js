import config from '../config/environment';

export function initialize(container, application) {
  let firebase = application.firebase || new Firebase(config.firebase);

  application.register('service:firebase', firebase, { instantiate: false });
}

export default {
  name: 'firebase',
  initialize: initialize
};
