(function() {
angular
  .module('museumPassport.questions', [])
  .controller('QuestionController', function($scope, $http, $cordovaFile, $cordovaDevice, $ionicActionSheet, $ionicPlatform, CreateAnswer, EditAnswer, FileService, Photo, Response){


  $http.get('http://museum-passport-backend.herokuapp.com/exhibits/' + localStorage['exhibitId'] + '/questions').success(function(data){
    $scope.questions = data;
  });

  $scope.collectResponses = function() {
    $scope.questions.forEach(function(item) {
      Response.saveUrl(item);
      console.log(item);
    });
  }

  $scope.addImage = function(question) {
    Photo.takePhoto(question)
    .then(function() {
      $scope.$evalAsync();
    });
  }

 //  $scope.savedAlert = function() {
 //   var alertPopup = $ionicPopup.alert({
 //     title: "Your responses have been saved",
 //    //  template: "Where to next?"
 //   });
 // };

});
})();
