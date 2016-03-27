angular
  .module('museumPassport.home', [])
  .controller('HomeController', function($scope, $location, $http){

    // $http.get('https://museum-passport-backend.herokuapp.com/museums/0/exhibits/0/questions').success(function(data){
    //   $scope.questions = data;
    // });

    $http.get('js/museums.json').success(function(data){
      $scope.museums = data;
    });

    //select the museum should update when button pressed. then store in window

    $scope.selectMuseum = function(museumId){
      $scope.storeMuseumId(museumId);
      $scope.goToExhibits();
    },

    $scope.storeMuseumId = function(museumId){
      window.localStorage['museum'] = museumId;
    },

    $scope.goToExhibits = function() {
      $location.path('/tab/exhibits');
    };
});
