angular
  .module('museumPassport.login', [])
  .controller('LoginController', function($scope, $location, UserSession, UserRegistration, $ionicPopup, $rootScope) {
$scope.data = {};

$scope.signup = function() {
var user_registration = new UserRegistration({ user: $scope.data });
  user_registration.$save(
    function(data){
      window.localStorage['userId'] = data.id;
      window.localStorage['userName'] = data.name;
      $location.path('/tab/home');
    },
    function(err){
      var error = err["data"]["error"] || err.data.join('. ')
      var confirmPopup = $ionicPopup.alert({
        title: 'An error occured',
        template: error
      });
    }
  );
};

$scope.login = function() {
  var user_session = new UserSession({ user: $scope.data });
  user_session.$save(
    function(data){
      window.localStorage['userId'] = data.id;
      window.localStorage['userName'] = data.name;
      $location.path('/tab/home');
    },
    function(err){
      var error = err["data"]["error"] || err.data.join('. ');
      var confirmPopup = $ionicPopup.alert({
        title: 'An error occured',
        template: error
      });
    }
  );
};

$scope.logout = function(data) {
      window.localStorage.removeItem['userId'] = data.id;
      window.localStorage.removeItem['userName'] = data.name;
      $location.path('login');
    };

});
