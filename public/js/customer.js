(function() {
	angular.module('wttEnrollmentForm', ['ngRoute'])
	angular.module('wttEnrollmentForm').controller('mainController', ['$scope', '$http', function($scope, $http) {
		$http.get('/api/me').then(function(response) {
			$scope.user = response.data;
			console.log($scope.user)
		})
	}]);
angular.module('wttEnrollmentForm')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/', {
			templateUrl: '/html/student-info.html',
		})
		.when('/student-info', {
			templateUrl: '/html/student-info.html',
		})
		.when('/guardian-info', {
			templateUrl: '/html/guardian-info.html',
		})
		.when('/trip-info', {
			templateUrl: '/html/trip-info.html',
		})
		.when('/payment', {
			templateUrl: '/html/payment.html',
		})
		$locationProvider
		  .html5Mode(false)
		  .hashPrefix('');		
	}]);
}());




































