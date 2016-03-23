// Ionic museumPassport App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'museumPassport' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('museumPassport', ['ionic', 'museumPassport.questions'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $stateProvider
  // .state('tab', {
  //   url: '/tab',
  //   abstract: true,
  //   templateUrl: 'templates/tabs.html',
  // });

  // .state('questions', {
  //   url: '/questions',
  //   templateUrl: 'templates/questions.html',
  //   controller: 'QuestionController'
  // });

  .state('questions', {
    url: '/questions',
    // views: {
      // 'questions': {
        templateUrl: 'templates/questions.html',
        controller: 'QuestionController'
      // }
    // }
  })

  .state('test', {
    url: '/test',
    templateUrl: 'templates/test.html',
    // views: {
      // 'test': {
        templateUrl: 'templates/test.html',
      // }
    // }
  });

  $urlRouterProvider.otherwise('/questions');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
    rewriteLinks: false
  });
});
