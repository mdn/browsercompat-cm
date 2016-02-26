import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addBrowser: function(params) {
      console.log('Attempt to add browser');
      var browser = params;
      browser.save();

      // go to new page
      this.transitionToRoute('browsers.browser', browser);
    },
  }
});
