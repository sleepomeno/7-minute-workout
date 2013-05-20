'use strict';

angular.module('7minuteApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/workout', {
        templateUrl: 'views/workout.html',
        controller: 'WorkoutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
