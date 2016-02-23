import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('browser');
  },
  actions: {
    didTransition: function() {
      // update document title
      var browser = this.modelFor('browsers.browser');
      document.title = "Browsers";
    },
  }
});
