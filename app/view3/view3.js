/**
 * Created by Caodq on 2017-03-03.
 */
'user strict';
angular.module('myApp.view3',['ngRoute','ui.router','ngCookies'])
.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/view3',{
        templateUrl:'view3/view3.html',
        controller:'view3Ctl'
    })
}])
.controller('view3Ctl',['$scope','$resource','$interval','$state','$cookieStore',function ($scope,$resource,$interval,$state,$cookieStore) {
    var temp = {};
    $scope.flag = false;

    var username = $cookieStore.get('username');
    if (username) $state.go('list');


    $scope.submit = function(){
       temp.name = $scope.name;
       temp.pass = $scope.pass;

       var user = $resource('../user/tsconfig.json');

       user.get({},function(data){
            if(temp.name == data.name && ( temp.pass == data.pass)){
                var value =4;
                $scope.value = 5;
                $scope.flag = true;
                $scope.msg = '登录成功';
                $cookieStore.put("username",temp.name);
                var time = $interval(function(){
                    $scope.value  = value ;
                    return value--;
                },1000,5)
                time.then(function(){
                    $state.go('list');
                },function(){
                    console.log('计时器出错');
                })
            }else{
                $scope.flag = true;
                $scope.pass = '';
                $scope.name = '';
                $scope.msg = '登录失败请确认密码';
            }
        },function () {
            console.log('error');
        })
    }
}])
