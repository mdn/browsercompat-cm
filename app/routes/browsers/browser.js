import Ember from 'ember';
import Browser from '../../models/browser';
import Version from '../../models/version';

export default Ember.Route.extend({
  model: function(params) {
    var browsers = this.modelFor('browsers');
    return browsers.findBy('id', params.browser_id);
  }
});
