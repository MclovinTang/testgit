/**
 * Created by Caodq on 2017-03-03.
 */
'user strict';
angular.module('list',['ngRoute','ngCookies'])
.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/view3/list',{
        templateUrl:'view3/list.html',
        controller:'listCtrl'
    })
}])
.controller('listCtrl',['$scope','$resource','$cookieStore','$state',function ($scope,$resource,$cookieStore,$state) {
       var list = $resource('../user/phones.json',{},{
        query: {
            method: 'GET',
                params: {phoneId: 'phones'},
            isArray: true
        }
    });

    $scope.username = $cookieStore.get('username');

       $scope.vm = list.query();

    $scope.loginOut = function(){
        $cookieStore.remove('username');
        $state.go('indexHome');
    }

}])
