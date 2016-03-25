(function() {
angular
  .module('museumPassport.questions', [])
  .controller('QuestionController', function($scope, $http) {

  $http.get('https://museum-passport-backend.herokuapp.com/museums/0/exhibits/0/questions').success(function(data){
    $scope.questions = data;
  });

});
})();
