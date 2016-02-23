import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form'],
  classNameBindings: ['isEditing', 'isDisplay'],

  isEditing: false,
  isDisplay: Ember.computed.not('isEditing'),
  actions: {
    editBrowser: function() {
      console.log('editBrowser');
      this.set('isEditing', true);
    },
    cancelBrowser: function() {
      console.log('cancelBrowser');
      // TODO: set form fields back to model
      this.set('isEditing', false);
    },
    saveBrowser: function() {
      console.log('saveBrowser triggered');
      this.get('saveBrowser')();
      this.set('isEditing', false);
    }
  }
});
