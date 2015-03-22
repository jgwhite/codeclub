import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';

MockFirebase.override();

setResolver(resolver);
