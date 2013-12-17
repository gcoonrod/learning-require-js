'use strict';

angular.module('requirejsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.test = function(){
    	return "This is a test!";
    };

    $scope.hourlyForcast = {};

    $http.get('http://api.wunderground.com/api/8bb2b87e5c3fdaba/hourly/q/CA/San_Francisco.json').
    success(function(data, status, headers, config){
    	$scope.hourlyForcast = data;
    	console.log(data);
    }).
    error(function(data, status, headers, config){

    })

    //End Controller
  });
