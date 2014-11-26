'use strict';

angular.module('mplsCommunityHousesApp')
  .controller('HousesCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
    $http.get('/api/house').success(function(houses) {
      $scope.houses = houses;
    });
    $scope.visiblePane = 'directory';
    $scope.togglePane = function(pane){
    	console.log(pane)
    	$scope.visiblePane = pane;
    }
  });
