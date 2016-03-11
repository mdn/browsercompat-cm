import Oauth2 from 'torii/providers/oauth2-bearer';

// extend oauth2 object to create Bcnext provider
var Bcnext = Oauth2.extend({
  'name': 'bcnext',
  'baseUrl': 'https://bcnext.herokuapp.com/oauth2/authorize/',
  'responseParams': ['expires_in', 'state', 'token_type', 'access_token', 'scope'],
  'responseType': 'token',
  'redirectUri': 'http://localhost:4200'
});

export default Bcnext;
