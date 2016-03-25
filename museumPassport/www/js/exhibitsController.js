angular
  .module('museumPassport.exhibits', [])
  .controller('ExhibitsController', function($scope, $location){

    $scope.goToQuestions = function() {
      $location.path('/tab/questions');
    };
});
