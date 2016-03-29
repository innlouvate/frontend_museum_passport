
angular
  .module('museumPassport.services', [])

  .factory('CreateAnswer', function($http) {
    return $http({
      method: 'POST',
      url:    'http://localhost:3000/museums/1/exhibits/1/questions/'+questionID+'/answers.json',
      data:   data,
      headers: { 'Content-Type': 'application/json'}
    })
      .success(function ( data, status, header, JSON ) {
      })
      .error(function ( data, status, header, JSON ) {
      });
    console.log(data);
  })

  .factory('UserSession', function($resource) {
    return $resource("http://localhost:3000/users/sign_in.json");
  });
