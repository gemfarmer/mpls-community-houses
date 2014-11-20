'use strict';

angular.module('mplsCommunityHousesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('houses', {
        url: '/houses',
        templateUrl: 'app/houses/houses.html',
        controller: 'HousesCtrl'
      });
  });