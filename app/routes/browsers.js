import Ember from 'ember';
import Browser from '../models/browser';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('browser');
  },
  actions: {
    saveBrowser: function() {
    // get the value of the form field
    var slug = this.get('controller').get('slug');
    var name = this.get('controller').get('name');

    this.store.createRecord('browser', {
      slug: slug,
      name: {
        'en': name
      }
    });

    // empty the form
      this.get('controller').set('slug', '');
      this.get('controller').set('name', '');
    }
  }
});
