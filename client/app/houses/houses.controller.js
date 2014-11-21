'use strict';

angular.module('mplsCommunityHousesApp')
  .controller('HousesCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
    $http.get('/api/house').success(function(houses) {
      $scope.houses = houses;
      console.log(houses)
    });
  });
