angular
  .module('museumPassport.game', [])
  .controller('GameController', function($scope, $location, $http, $q, NewGameService){

  $scope.resultText = null;

  var startGame = function() {
    NewGameService.getData()
      .then(function(chosenArray) {
        if (chosenArray.game_word) {
          var formattedArray = chosenArray.game_word.wordlist.split(",");
          $scope.selectWord(formattedArray);
          console.log(chosenArray);
        } else {
          return "error";
        }
      }, function(error) {
        return "error";
      });
  };


  $scope.selectWord = function(chosenArray){
    var word = chosenArray[Math.floor(Math.random()*chosenArray.length)];
    $scope.wordAnswer = word;
    console.log($scope.wordAnswer);
    $scope.jumbleWord();
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


  $scope.createNewGame = function() {
    $scope.resetGame();
    startGame();
  };

  $scope.resetGame = function(){
    $scope.new.go = true;
    $scope.showResults.show = false;
    $scope.responses.playerAnswer = "";
  };

  $scope.new = function(){
    $scope.go = false;
  };

    $scope.checkResults = function(){
      if($scope.responses.playerAnswer === $scope.wordAnswer) {
        $scope.resultText = "Well Done! ";
      } else {
        $scope.resultText = "Not quite. ";
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
      return $scope.resultText + "The answer was: " + $scope.wordAnswer;
    };


});
