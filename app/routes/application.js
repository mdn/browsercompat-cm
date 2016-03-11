import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch().then(function() {
      //console.log('session fetched');
    }, function() {
      //console.log('no session to fetch');
    });
  },
  actions: {
    signin: function() {
      this.get('session').open('bcnext');
    },
    signout: function() {
      this.get('session').close('bcnext');
    }
  }
});
