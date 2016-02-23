import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form'],
  classNameBindings: ['isEditing', 'isDisplay'],

  isEditing: false,
  isDisplay: Ember.computed.not('isEditing'),
  actions: {
    editVersion: function() {
      this.set('isEditing', true);
    },
    cancelVersion: function() {
      this.set('isEditing', false);
    },
    saveVersion: function() {
      this.get('saveVersion')();
      this.set('isEditing', false);
    }
  }
});
