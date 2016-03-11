import Ember from 'ember';

function fetchUser(token) {
  return new Ember.RSVP.Promise(function (resolve, reject) {
    return Ember.$.get( 'https://bcnext.herokuapp.com/api/v2/users/me', {
      access_token: token
    }).then (function(response){
      resolve({
        username: response.data.attributes.username,
        token: token });
    }, function(error){
      reject(error);
    });
  })
}

export default Ember.Object.extend({
  open: function(authorization) {
    var token = authorization.authorizationToken.access_token;
    window.localStorage.setItem('session-token', token);
    return fetchUser(token);
  },
  fetch: function() {
    var token = window.localStorage.getItem('session-token');
    return fetchUser(token);
  },
  close: function() {
    window.localStorage.removeItem('session-token');
  }
});
