import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('browser', params.browser_id);
  },
  actions: {
    didTransition: function() {
      // update document title
      var browser = this.modelFor('browsers.browser');
      document.title = `${browser.get('name.en')}`;
    }
  }
});
