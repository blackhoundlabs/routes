(function() {

	// 'use strict';

var app = angular.module('myapp', ['ngRoute']);

	app.config(function($locationProvider) {
		$locationProvider.html5Mode(true);
	});

	app.config(['$routeProvider', function ($routeProvider) {
	    $routeProvider.
	    when('/', {
	        templateUrl: 'index.html'
	    }).
	    when('/apps', {
	        templateUrl: 'app.html'
	    }).
	    when('/login', {
	    	templateUrl: 'index.html'
	    }).
	    otherwise({
	        redirectTo: '/login'
	    });
	}]);

})();