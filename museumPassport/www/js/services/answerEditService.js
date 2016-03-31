
angular
  .module('museumPassport.editAnswers', [])

  .factory('EditAnswer', function($http) {
    var EditAnswer = function(data) {
      angular.extend(this, data);
    }

    EditAnswer.prototype.edit = function(data, answer_id) {
      $http({
        method: 'PUT',
        url:    'http://museum-passport-backend.herokuapp.com/answers/'+answer_id+'.json',
        data:   data,
        headers: { 'Content-Type': 'application/json'}
      })
        .success(function ( data, status, header, JSON ) {
        })
        .error(function ( data, status, header, JSON ) {
        });
    }

    return EditAnswer;
  })
