/** Created by TangL on 2017-03-06.*/
'use strict';
angular.module('myApp').
config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
}]);