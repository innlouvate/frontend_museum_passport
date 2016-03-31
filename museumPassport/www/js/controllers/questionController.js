(function() {
angular
  .module('museumPassport.questions', [])
  .controller('QuestionController', function($scope, $http, $cordovaFile, $cordovaDevice, $ionicActionSheet, $ionicPlatform, $ionicModal, $ionicPopup, CreateAnswer, EditAnswer, FileService, Photo, Response){

  $http.get('http://museum-passport-backend.herokuapp.com/exhibits/' + localStorage['exhibitId'] + '/questions')
  .success(function(data){
    $scope.questions = data;
  });

  $scope.doRefresh = function() {
    $http.get('http://museum-passport-backend.herokuapp.com/exhibits/' + localStorage['exhibitId'] + '/questions')
    .success(function(data){
      $scope.questions = data;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
   };

  $scope.collectResponses = function() {
    $scope.questions.forEach(function(item) {
      Response.save(item);
      console.log(item);
    });
  }

  $ionicPlatform.ready(function() {
    $scope.images = FileService.getImages();
    $scope.$evalAsync();
  });

  $scope.addImage = function(question) {
    Photo.takePhoto(question)
    .then(function(result) {

      // $scope.getData();
      // $scope.$evalAsync();
      $state.go($state.current, {}, {reload: true});
      $window.location.reload(true);
      $state.reload()
    });
  }

  $scope.urlForImage = function(imageName) {
    var trueOrigin = cordova.file.dataDirectory + imageName;
    return trueOrigin;
  }

  $scope.savedAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: "Your responses have been saved",
     template: "Where to next?"
   });
 };

 $scope.showImage = function(question) {
		$scope.image = question.question.image;
		$scope.showModal('templates/imageModal.html');
	}

	$scope.showModal = function(templateUrl) {
		$ionicModal.fromTemplateUrl(templateUrl, {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
			$scope.modal.show();
		});
	}

	// Close the modal
	$scope.closeModal = function() {
		$scope.modal.hide();
		$scope.modal.remove()
	};

});
})();
