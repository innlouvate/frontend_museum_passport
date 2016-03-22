(function() {
    'use strict';

    angular
      .module('museumPassport.questions', [])
      .controller('QuestionController', function($http) {
      var self = this;

      $http.get('dummyq.json').success(function(data){
        self.questions = data;
      });

      // self.recordAnswers = function(questionID, answerID) {
      //   var data = JSON.stringify({"answer_id": answerID});
      //   $http.post('http://localhost:3000/questions/'+questionID+'/responses', data, JSON)
      //     .success(function ( data, status, header, JSON ) {
      //     })
      //     .error(function ( data, status, header, JSON ) {
      //     });
      //   console.log(data);
      // }

  });
})();
