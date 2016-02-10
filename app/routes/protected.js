import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        signIn: function() {
            var controller = this.controllerFor('protected');
            // The provider name is passed to `open`
            this.get('torii').open('bcnext').then(function(authorization){
                controller.set('hasAuth', true);
            });
        }
    }
});
