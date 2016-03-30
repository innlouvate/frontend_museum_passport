angular
  .module('museumPassport.game', [])
  .controller('GameController', function($scope, $location, $http){

    // $http.get("/gameDummy.json").success(function(data){
    //   $scope.gameWords = data;
    // });

    var gameWords = ["cat", "dog", "rat", "bunny", "lamb", "frog"];
    var resultText = null;

    $scope.newGame = function(){
      $scope.resetGame();
      $scope.selectWord();
      $scope.jumbleWord();
    };

    $scope.resetGame = function(){
      $scope.new.go = true;
      $scope.showResults.show = false;
      $scope.responses.playerAnswer = "";
    };

    $scope.new = function(){
      $scope.go = false;
    };

    $scope.selectWord = function(){
      var word = gameWords[Math.floor(Math.random()*gameWords.length)];
      $scope.wordAnswer = word;
    };

//furture refactor put this in facory.xxx

    $scope.jumbleWord = function(){
      var word = $scope.wordAnswer.split("");
      var l = word.length;

      for(var i = l - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var holder = word[i];
        word[i] = word[j];
        word[j] = holder;
      }
      $scope.wordJumbled = word.join("");
      $scope.checkWord();
    };

    $scope.checkWord = function(){
      if ($scope.wordAnswer === $scope.wordJumbled) {
        $scope.jumbleWord();
      }
    };

// xxxxxxxxxxxxxxxxxxxxx

    $scope.returnJumble = function(){
      return $scope.wordJumbled;
    };

    $scope.checkResults = function(){
      if($scope.responses.playerAnswer === $scope.wordAnswer) {
        resultText = "Well Done! ";
      } else {
        resultText = "Not quite. ";
      }
      $scope.showResults.show = true;
    };

    $scope.showResults = function(){
      $scope.show = false;
    };


    $scope.responses = function(){
      $scope.playerAnswer = {};
    };


    $scope.returnAnswer = function(){
      return resultText + "The answer was: " + $scope.wordAnswer;
    };


});
