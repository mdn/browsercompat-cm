import DS from 'ember-data';

export default DS.Model.extend({
  slug: DS.attr('string'),
  name: DS.attr(),
  note: DS.attr(),
  versions: DS.hasMany('versions', {async: true}),
  // computed
  versionsReversed: function() {
    return this.get('versions').toArray().reverse();
  }.property('versions.[]'),
});

