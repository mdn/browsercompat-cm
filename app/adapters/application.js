import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.apiHost,
  namespace: ENV.apiNameSpace,
  session: Ember.inject.service('session'),
  headers: Ember.computed('session.token', function() {
    var token = this.get('session.token');
    console.log('session.token', token)
    if(token) {
      return {
        'Authorization': 'Bearer ' + this.get('session.token'),
      };
    } else {
      return;
    }
  })
});
