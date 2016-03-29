
angular
  .module('museumPassport.answers', [])

  // .factory('CreateAnswer', function($resource) {
  //   return $resource('http://localhost:3000/questions/'+ window.localStorage['questionId'] +'/answers.json', null,
  //   {
  //     'new': {method: 'POST'}
  //   });
  // });

  .factory('CreateAnswer', function($http) {
    var CreateAnswer = function(data) {
      angular.extend(this, data);
    }

    CreateAnswer.prototype.create = function(data, question_id) {
      $http({
              method: 'POST',
              url:    'http://localhost:3000/questions/'+question_id+'/answers.json',
              data:   data,
              headers: { 'Content-Type': 'application/json'}
            })
              .success(function ( data, status, header, JSON ) {
              })
              .error(function ( data, status, header, JSON ) {
              });



      // var answer = this;
      // return $http.post('http://localhost:3000/questions/'+ question_id +'/answers.json', answer)
      //   .success(function ( data, status, header, JSON ) {
      // })
      //   .error(function ( data, status, header, JSON ) {
      // });
    }

    return CreateAnswer;
  })
