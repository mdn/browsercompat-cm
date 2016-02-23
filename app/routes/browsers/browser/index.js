import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    // forward from this page to the list of versions
    this.transitionTo('browsers.browser.versions');
  }
});
