
angular
  .module('museumPassport.answers', [])

  .factory('CreateAnswer', function($http) {
    var CreateAnswer = function(data) {
      angular.extend(this, data);
    }

    CreateAnswer.prototype.create = function(data, question_id) {
      $http({
              method: 'POST',
              url:    'http://museum-passport-backend.herokuapp.com/questions/'+question_id+'/answers.json',
              data:   data,
              headers: { 'Content-Type': 'application/json'}
            })
              .success(function ( data, status, header, JSON ) {
              })
              .error(function ( data, status, header, JSON ) {
              });
    }

    return CreateAnswer;
  })
