/**
 * Created by Caodq on 2017-03-03.
 */
'user strict';
angular.module('indexHome',['ngRoute','ui.router'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/indexHome',{
            templateUrl:'view3/indexHome.html',
            controller:'indexHomeCtrl'
        })
    }])
    .controller('indexHomeCtrl',['$scope','$resource','$interval','$state',function ($scope,$resource,$interval,$state) {

    }])

