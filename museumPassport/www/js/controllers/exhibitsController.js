angular
  .module('museumPassport.exhibits', [])
  .controller('ExhibitsController', function($scope, $location, $http){

    var museumId = window.localStorage['museumId'];

    $http.get("https://museum-passport-backend.herokuapp.com/museums/" + museumId + "/exhibits").success(function(data){
      $scope.exhibits = data;
    });

    //select the exhibit should update when button pressed. then store in window

    $scope.selectExhibit = function(exhibitId){
      $scope.storeExhibitId(exhibitId);
      $scope.goToQuestions();
    },

    $scope.storeExhibitId = function(exhibitId){
      window.localStorage['exhibitId'] = exhibitId;
    },

    $scope.goToQuestions = function() {
      $location.path('/tab/questions');
    };

});
