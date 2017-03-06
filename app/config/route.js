/**
 * Created by Caodq on 2017-03-06.
 */
'use strict';
angular.module('myApp').
config(['$locationProvider', '$routeProvider','$stateProvider',function($locationProvider, $routeProvider,$stateProvider) {

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

    $routeProvider.otherwise({redirectTo: '/indexHome'});
}]);