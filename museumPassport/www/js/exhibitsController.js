angular
  .module('museumPassport.exhibits', [])
  .controller('ExhibitsController', function($scope, $location, $http){

    // $http.get('https://museum-passport-backend.herokuapp.com/museums/0/exhibits/0/questions').success(function(data){
    //   $scope.questions = data;
    // });
    $http.get('js/exhibits.json').success(function(data){
      $scope.exhibits = data;
    });

    $scope.goToQuestions = function() {
      $location.path('/tab/questions');
    };
});
