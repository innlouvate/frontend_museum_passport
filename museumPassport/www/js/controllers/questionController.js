(function() {
angular
  .module('museumPassport.questions', [])
  .controller('QuestionController', function($scope, $http, $cordovaFile, $cordovaDevice, $ionicActionSheet, $ionicPlatform, CreateAnswer, EditAnswer, FileService, Photo, Response){


  $http.get('http://museum-passport-backend.herokuapp.com/exhibits/' + localStorage['exhibitId'] + '/questions').success(function(data){
    $scope.questions = data;
  });

  $scope.collectResponses = function() {
    $scope.questions.forEach(function(item) {
      Response.save(item);
    });
  }

  $ionicPlatform.ready(function() {
    $scope.images = FileService.images();
    // $scope.$evalAsync();
  });


  $scope.addImage = function(i, question) {
    // $scope.hideSheet();
    Photo.takePhoto(question.question.id).then(function(url) {
      Response.saveUrl(question, url);
      // $scope.questions[i].question.image = url;
      $scope.$evalAsync();
    });
  }

  $scope.urlForImage = function(imageName) {
    var trueOrigin = cordova.file.dataDirectory + imageName;
    return trueOrigin;
  }

 //  $scope.savedAlert = function() {
 //   var alertPopup = $ionicPopup.alert({
 //     title: "Your responses have been saved",
 //    //  template: "Where to next?"
 //   });
 // };

});
})();
