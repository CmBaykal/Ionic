angular.module('index', ['ionic', 'index.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {

      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'pages/kopru.html',
    controller: 'indexCtrl'
  })

  .state('app.anasayfa', {
    url: '/anasayfa',
    views: {
      'menuContent': {
        templateUrl: 'pages/anasayfa.html'
      }
    }
  });
  $urlRouterProvider.otherwise('/app/anasayfa');
});
