/**
 * Created by Caodq on 2017-03-06.
 */
'use strict';
angular.module('myApp').factory('httpInterceptor',['$q','$injector','$cookieStore',function($q,$injector,$cookieStore){
    var httpInterceptor = {
        'request' : function(config) {
            var lgArr = ['view3/list.html'];
            var url = config.url;
            if(lgArr.indexOf(url) != -1){
                var $state = $injector.get('$state');
                var username = $cookieStore.get('username');
                if(!username){
                    $state.go('indexHome');
                }
            }
            return config;
        }
    };

    return httpInterceptor;
}])