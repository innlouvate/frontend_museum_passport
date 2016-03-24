
angular
  .module('museumPassport.questions')
  .factory('UserSession', function($resource) {
    return $resource("http://localhost:3000/users/sign_in.json");
  })
