(function() {
angular
  .module('museumPassport.questions', ['ionic'])
  .controller('QuestionController', function($scope, $http, $cordovaFile, $ionicPlatform, $ionicActionSheet, ImageService, FileService){

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
  };

  $scope.recordAnswer = function(questionID, answer) {
        var data = $scope.formatJson(answer);

        $http({
          method: 'POST',
          url:    'http://localhost:3000/museums/1/exhibits/1/questions/'+questionID+'/answers.json',
          data:   data,
          headers: { 'Content-Type': 'application/json'}
        })
          .success(function ( data, status, header, JSON ) {
          })
          .error(function ( data, status, header, JSON ) {
          });
        console.log(data);
      };

  $scope.formatJson = function(answer) {
    var data = JSON.stringify({"entry": answer, "user_id": window.localStorage['userId']});
    return data;
  };

 //  $scope.savedAlert = function() {
 //   var alertPopup = $ionicPopup.alert({
 //     title: "Your responses have been saved",
 //    //  template: "Where to next?"
 //   });
 // };

 $ionicPlatform.ready(function() {
   $scope.images = FileService.images();
   $scope.$evalAsync();
 });

 $scope.urlForImage = function(imageName) {
   var trueOrigin = cordova.file.dataDirectory + imageName;
   return trueOrigin;
 }

 $scope.addMedia = function() {
   $scope.hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: 'Take photo' },
       { text: 'Photo from library' }
     ],
     titleText: 'Add images',
     cancelText: 'Cancel',
     buttonClicked: function(index) {
       $scope.addImage(index);
     }
   });
 }

 $scope.addImage = function(type) {
   $scope.hideSheet();
   ImageService.handleMediaDialog(type).then(function() {
     $scope.$evalAsync();
   });
 }

});
})();
