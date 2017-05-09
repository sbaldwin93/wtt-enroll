(function() {
	angular.module('wttEnrollmentForm', ['ngRoute', 'ngFileUpload'])
	angular.module('wttEnrollmentForm').controller('mainController', ['$scope', '$http', function($scope, $http) {
		
	}]);

angular.module('wttEnrollmentForm')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/', {
			templateUrl: '/html/admin-portal-home.html',
		})
		.when('/admin-portal-home', {
			templateUrl: '/html/admin-portal-home.html',
		})
		$locationProvider
		  .html5Mode(false)
		  .hashPrefix('');		
	}]);
}());




































