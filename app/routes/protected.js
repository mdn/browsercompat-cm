import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signIn: function() {
      var controller = this.controller;
      this.get('torii').open('bcnext').then(function(authData){
        controller.set('hasAuth', true);
      });
    },
    signOut: function() {
      var controller = this.controller;
      this.get('torii').close('bcnext').then(function(authData){
        controller.set('hasAuth', false);
      });
    }
  }
});
