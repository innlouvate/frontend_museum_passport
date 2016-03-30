(function() {
angular
  .module('museumPassport.questions', [])
  .controller('QuestionController', function($scope, $http, $cordovaFile, $cordovaDevice, $ionicActionSheet, $ionicPlatform, CreateAnswer, EditAnswer, FileService, Photo){


  $http.get('http://museum-passport-backend.herokuapp.com/exhibits/' + localStorage['exhibitId'] + '/questions').success(function(data){
    $scope.questions = data;
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
    console.log($scope.status())
    if($scope.status() === 'new') {
      $scope.questions.forEach(function(item) {
        var data = $scope.formatJson(item.question.answer);
        var answer = new CreateAnswer()
        answer.create(data, item.question.id);
      });
    } else {
      $scope.questions.forEach(function(item) {
        var data = $scope.formatUpdate(item.question.answer_id, item.question.answer);
        var answer = new EditAnswer()
        answer.edit(data, item.question.answer_id);
      });
    }
  };

  $scope.formatJson = function(answer) {
    var data = JSON.stringify({"entry": answer, "user_id": window.localStorage['userId']});
    return data;
  };

  $scope.formatUpdate = function(answer_id, answer) {
    var data = JSON.stringify({"answer_id": answer_id, "entry": answer, "user_id": window.localStorage['userId']});
    return data;
  };

  $ionicPlatform.ready(function() {
    $scope.images = FileService.images();
    // $scope.$evalAsync();
  });


  $scope.addImage = function(i) {
    // $scope.hideSheet();
    Photo.takePhoto().then(function(url) {
      console.log(url);
      $scope.questions[i].question.image = url;
      // $scope.$evalAsync();
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
