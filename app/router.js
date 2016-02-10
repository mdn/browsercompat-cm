import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('browsers', function() {
    this.route('browser', {path: ':browser_id'});
  });
  this.authenticatedRoute('protected');
});

export default Router;
