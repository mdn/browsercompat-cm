import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',
  actions: {
    addBrowser: function(params) {
      console.log('Attempt to add browser');
      var controller = this;

      var browser = this.store.createRecord('browser', this.get('params'));
      browser.save().then(function() {
        // empty the form
        controller.set('name', '');
        controller.set('slug', '');
        controller.set('note', '');
        // go to new page
        route.transitionTo('browsers.browser.versions', browser);
      });
    },
  }
});
