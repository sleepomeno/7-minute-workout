'use strict';

angular.module('7minuteApp')
	.controller('MainCtrl', function($scope, $location) {
	$scope.startWorkout = function() {
		$location.url('/workout');
	};
});