
angular
  .module('museumPassport.services', [])

  .factory('UserRegistration', function($resource) {
    return $resource("http://museum-passport-backend.herokuapp.com/users.json");
  })
  .factory('UserSession', function($resource) {
    return $resource("http://museum-passport-backend.herokuapp.com/users/sign_in.json");
  });
