'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
   'ngResource',
    'ui.router',
  'myApp.view1',
  'myApp.view2',
    'myApp.view3',
  'myApp.version',
    'list',
    'indexHome',
    'ngCookies'
]).
config(['$locationProvider', '$routeProvider','$stateProvider', function($locationProvider, $routeProvider,$stateProvider) {
  $locationProvider.hashPrefix('!');

  $stateProvider.state('indexHome', {
      url: '/indexHome',
      label: '首页',
      views: {
          '': {
              templateUrl: '/view3/indexHome.html',
              controller: 'indexHomeCtrl'
          }
      }
  });

  $stateProvider.state('list', {
      url: '/view3/list',
      label: '列表',
      views: {
          '': {
              templateUrl: '/view3/list.html',
              controller: 'listCtrl'
          }
      }
   });
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
