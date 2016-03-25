
angular
  .module('museumPassport.services', [])

  .factory('UserRegistration', function($resource) {
    return $resource("http://localhost:3000/users.json");
  })
  .factory('UserSession', function($resource) {
    return $resource("http://localhost:3000/users/sign_in.json");
  });
