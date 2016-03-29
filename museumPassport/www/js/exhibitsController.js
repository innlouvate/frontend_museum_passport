angular
  .module('museumPassport.exhibits', [])
  .controller('ExhibitsController', function($scope, $location, $http){

    // $http.get('https://museum-passport-backend.herokuapp.com/museums/0/exhibits/0/questions').success(function(data){
    //   $scope.questions = data;
    // });

    var addressOne = 'https://museum-passport-backend.herokuapp.com/museums/';
    var museumId = window.localStorage['museumId'];
    console.log(museumId)
    var addressTwo = '/exhibits';

    $http.get("https://museum-passport-backend.herokuapp.com/museums/1/exhibits").success(function(data){
      $scope.exhibits = data;
    });

    //select the exhibit should update when button pressed. then store in window

    $scope.selectExhibit = function(exhibitId){
      $scope.storeExhibitId(exhibitId);
      $scope.goToQuestions();
    },

    $scope.storeExhibitId = function(exhibitId){
      window.localStorage['exhibitId'] = exhibitId;
      console.log(window.localStorage['exhibitId'])
      console.log(exhibitId)
    },

    $scope.goToQuestions = function() {
      $location.path('/tab/questions');
    };

});
