angular.module('myApp', ['ui.router'])

  .config( function( $urlRouterProvider, $stateProvider) {

    $urlRouterProvider.when('', '/');
            $stateProvider
              .state('home', {
                url: '/',
                temlateUrl: "index.html",
                controller: 'mainCtrl'
              })

  })
