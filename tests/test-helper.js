import resolver from './helpers/resolver';
import { setResolver } from 'ember-qunit';
import FlashObject from 'ember-cli-flash/flash/object';

// Flash message will cause acceptance tests to pause
// This hack will cause them to mount up instead
FlashObject.reopen({ _destroyLater: null });

setResolver(resolver);
