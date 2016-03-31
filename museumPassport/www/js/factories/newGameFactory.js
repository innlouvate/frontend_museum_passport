
angular
  .module('museumPassport.factories', [])

  .factory('NewGameService', function ($http, $q) {
    return {
      getData: function() {
        return $http.get('https://museum-passport-backend.herokuapp.com/game_words')
        .then(function(response) {
          if (typeof response.data === 'object') {
            var chosenArray = response.data[Math.floor(Math.random()*response.data.length)];
            return chosenArray;
          } else {
            return $q.reject(response.data);
          }
        }, function(response) {
          return $q.reject(response.data);
        });
      }
    };
  });
