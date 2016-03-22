
    angular
      .module('museumPassport.questions', ['ionic'])
      .controller('QuestionController', function($scope, $http) {

      $http.get('js/dummyq.json').success(function(data){
        $scope.questions = data;
      });

  });
