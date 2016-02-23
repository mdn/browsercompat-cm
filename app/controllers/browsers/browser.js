import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveBrowser: function(params) {
      console.log('Attempt to save browser');
      var browser = params;
      browser.save();

      return true;
    },
    addVersion: function(params) {
      console.log('Attempt to add version');
      var controller = this;

      var version = this.store.createRecord('version', params);
      // TODO: empty the form

    },
  }
});
