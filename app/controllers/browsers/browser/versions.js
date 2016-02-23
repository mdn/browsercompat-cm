import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveVersion: function(params) {
      console.log('Attempt to save version');
      var version = params;
      version.save();

      return true;
    },
  }
});
