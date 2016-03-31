(function() {

	'use strict';

var app = angular.module('myapp', ['ngRoute']);
	app.config(function($locationProvider) {
	  $locationProvider.html5Mode(true);
	});

	app.config(['$routeProvider', function ($routeProvider) {
	    $routeProvider.
	    when('/', {
	        templateUrl: 'index.html',
	        controller: 'login'
	    }).
	    when('/app', {
	        templateUrl: 'app.html',
	        controller: 'appctrl'
	    }).
	    when('/login', {
	    	templateUrl: 'index.html',
	    	controller: 'login'
	    }).
	    otherwise({
	        redirectTo: '/login'
	    });
	}]);

	app.controller('login', function ($scope) {

	});

})();