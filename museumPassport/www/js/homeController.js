angular
  .module('museumPassport.home', [])
  .controller('HomeController', function($scope, $location){

    $scope.goToQuestions = function() {
      $location.path('/tab/questions');
    };
});
