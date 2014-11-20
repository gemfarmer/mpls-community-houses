'use strict';

angular.module('mplsCommunityHousesApp')
  .controller('ProfileCtrl', function ($scope,$timeout) {
    $scope.house = {};
    $scope.errors = {};
    $scope.saveMessage = false;

    $scope.submit = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
      	console.log($scope.house)
      	$scope.saveMessage = true;
      	$timeout(function(){
      		$scope.saveMessage = false;
      	},2000);
      }
    };


  });
