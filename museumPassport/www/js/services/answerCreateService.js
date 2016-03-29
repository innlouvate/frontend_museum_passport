
angular
  .module('museumPassport.services', [])

  .factory('CreateAnswer', function(question_id, data, $http) {
    return $http({
      method: 'POST',
      url:    'http://localhost:3000/questions/'+question_id+'/answers.json',
      data:   data,
      headers: { 'Content-Type': 'application/json'}
    })
      .success(function ( data, status, header, JSON ) {
      })
      .error(function ( data, status, header, JSON ) {
      });
    console.log(data);
  });
