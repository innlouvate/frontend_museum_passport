angular
  .module('museumPassport.home', [])
  .controller('HomeController', function($scope, $location, $http){

    $http.get("https://museum-passport-backend.herokuapp.com/museums").success(function(data){
      $scope.museums = data;
    });

    //select the museum should update when button pressed. then store in window

    $scope.selectMuseum = function(museumId){
      $scope.storeMuseumId(museumId);
      $scope.goToExhibits();
    };

    $scope.storeMuseumId = function(museumId){
      window.localStorage['museumId'] = museumId;
    },

    $scope.goToExhibits = function() {
      $location.path('/tab/exhibits');
    };
});
