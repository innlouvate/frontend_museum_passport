angular
  .module('museumPassport.home', [])
  .controller('HomeController', function($scope, $location){

    $scope.goToExhibits = function() {
      $location.path('/tab/exhibits');
    };
});
