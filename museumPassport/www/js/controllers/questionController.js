(function() {
angular
  .module('museumPassport.questions', [])
  .controller('QuestionController', function($scope, $http, CreateAnswer){


  $http.get('http://localhost:3000/exhibits/' + localStorage['exhibitId'] + '/questions').success(function(data){
    $scope.questions = data;
    $scope.status();
    console.log($scope.status())
  });

  $scope.status = function() {
    if($scope.questions[0].question.answer_id) {
      return 'edit';
    } else {
      return 'new'
    }
  }

  $scope.collectResponses = function() {
    if($scope.status() === 'new') {
      $scope.questions.forEach(function(item) {
        var data = $scope.formatJson(item.question.answer);
        var answer = new CreateAnswer()
        answer.create(data, item.question.id);
      });
    } else {
      $scope.questions.forEach(function(item) {
        $scope.updateAnswer(item.question.id, item.question.answer_id, item.question.answer);
      });
    }
  };

  // var user_registration = new UserRegistration({ user: $scope.data });
  //   user_registration.$save(
  //     function(data){
  //       window.localStorage['userId'] = data.id;
  //       window.localStorage['userName'] = data.name;
  //       $location.path('/tab/home');
  //     },
  //     function(err){
  //       var error = err["data"]["error"] || err.data.join('. ')
  //       var confirmPopup = $ionicPopup.alert({
  //         title: 'An error occured',
  //         template: error
  //       });
  //     }
  //   );
  // $scope.recordAnswer = function(questionID, answer) {
  //
  //       $http({
  //         method: 'POST',
  //         url:    'http://localhost:3000/museums/1/exhibits/1/questions/'+questionID+'/answers.json',
  //         data:   data,
  //         headers: { 'Content-Type': 'application/json'}
  //       })
  //         .success(function ( data, status, header, JSON ) {
  //         })
  //         .error(function ( data, status, header, JSON ) {
  //         });
  //       console.log(data);
  //     };

  $scope.formatJson = function(answer) {
    var data = JSON.stringify({"entry": answer, "user_id": window.localStorage['userId']});
    return data;
  };

  $scope.updateAnswer = function(questionID, answerID, answer) {
        var data = $scope.formatUpdate(answerID, answer);

        $http({
          method: 'PUT',
          url:    'http://localhost:3000/museums/1/exhibits/1/questions/'+questionID+'/answers/'+answerID+'.json',
          data:   data,
          headers: { 'Content-Type': 'application/json'}
        })
          .success(function ( data, status, header, JSON ) {
          })
          .error(function ( data, status, header, JSON ) {
          });
        console.log(data);
      };

  $scope.formatUpdate = function(answer_id, answer) {
    var data = JSON.stringify({"answer_id": answer_id, "entry": answer, "user_id": window.localStorage['userId']});
    return data;
  };

 //  $scope.savedAlert = function() {
 //   var alertPopup = $ionicPopup.alert({
 //     title: "Your responses have been saved",
 //    //  template: "Where to next?"
 //   });
 // };

});
})();
