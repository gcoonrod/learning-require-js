'use strict';

angular.module('requirejsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.test = function(){
    	return "This is a test!";
    };

    //End Controller
  });
