'use strict';

angular.module('7minuteApp')
  .controller('WorkoutCtrl', function($scope, $timeout) {
  $scope.exercises = [];
  $scope.exercises[0] = {
    name: 'Jumping Jacks'
  };
  $scope.exercises[1] = {
    name: 'Wall Sit'
  };
  $scope.exercises[2] = {
    name: 'Push-Up'
  };
  $scope.exercises[3] = {
    name: 'Abdominal Crunch'
  };
  $scope.exercises[4] = {
    name: 'Step-up onto chair'
  };
  $scope.exercises[5] = {
    name: 'Squat'
  };
  $scope.exercises[6] = {
    name: 'Triceps dip on chair'
  };
  $scope.exercises[7] = {
    name: 'Plank'
  };
  $scope.exercises[8] = {
    name: 'High knees running in place'
  };
  $scope.exercises[9] = {
    name: 'Lunge'
  };
  $scope.exercises[10] = {
    name: 'Push-up and rotation'
  };
  $scope.exercises[11] = {
    name: 'Side plank'
  };

  $scope.inPractice = false;
  $scope.curExerciseNr = 0;

  var exerciseDuration = 30;
  var pauseDuration = 10;
  $scope.curCountdown = pauseDuration;

  function updateTimer() {
    $timeout(function() {
      $scope.curCountdown = $scope.curCountdown - 1;
      if ($scope.curCountdown === -1) {
        $scope.curCountdown = pauseDuration;
        if ($scope.inPractice) {
          $scope.inPractice = false;
          $scope.curCountdown = pauseDuration;
          $scope.curExerciseNr = ($scope.curExerciseNr + 1) % 12;
        } else {
          $scope.inPractice = true;
          $scope.curCountdown = exerciseDuration;
        }
      }
      updateTimer();
    }, 1000);
  }
  updateTimer();

});