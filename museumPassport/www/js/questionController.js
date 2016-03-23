(function() {
angular
  .module('museumPassport.questions', [])
  .controller('QuestionController', function($scope, $http, $ionicPopup) {

  $http.get('https://museum-passport-backend.herokuapp.com/museums/0/exhibits/0/questions').success(function(data){
    $scope.questions = data;
  });

  $scope.collectResponses = function() {
    var collection = [];
    $scope.questions.forEach(function(item) {
      $scope.recordAnswer(item.question.id, item.question.response)
      collection.push(item.question.response);
    });
    console.log(collection);
  }

  $scope.recordAnswer = function(questionID, answer) {
        var data = JSON.stringify({"entry": answer});
        $http.post('https://museum-passport-backend.herokuapp.com/museums/1/exhibits/1/questions/'+questionID+'/answers', data, JSON)
          .success(function ( data, status, header, JSON ) {
          })
          .error(function ( data, status, header, JSON ) {
          });
        console.log(data);
      }

  $scope.go = function ( path ) {
    $location.path( path );
  };

  $scope.savedAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: "Your responses have been saved",
    //  template: "Where to next?"
   });
 };

});
})();
