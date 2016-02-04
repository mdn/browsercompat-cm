import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://bcnext.herokuapp.com',
  namespace: 'api/v2'
});
