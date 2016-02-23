import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  browser: DS.belongsTo('browser', {async: true}),
  version: DS.attr('string'),
  release_day: DS.attr('date'),
  retirement_day: DS.attr('date'),
  status: DS.attr('string'),
  release_notes_uri: DS.attr(),
  note: DS.attr(),
  order: DS.attr('number'),
  supports: DS.attr(),
  //supports: DS.hasMany('supports', {async: true}),
  //computed
  isFuture: Ember.computed.equal('status', 'future'),
  isBeta: Ember.computed.equal('status', 'beta'),
  isCurrent: Ember.computed.equal('status', 'current'),
  isRetired: Ember.computed.equal('status', 'retired'),
  isNull: Ember.computed.equal('status', '')
});
