angular
  .module('museumPassport.home', [])
  .controller('HomeController', function($scope, $location, $http){

    // $http.get('https://museum-passport-backend.herokuapp.com/museums/0/exhibits/0/questions').success(function(data){
    //   $scope.questions = data;
    // });
    $http.get('js/museums.json').success(function(data){
      $scope.museums = data;
    });

    $scope.goToExhibits = function() {
      $location.path('/tab/exhibits');
    };
});
