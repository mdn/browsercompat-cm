import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://bcnext.herokuapp.com',
  namespace: 'api/v2'
});
