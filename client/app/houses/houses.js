'use strict';

angular.module('mplsCommunityHousesApp')
  .config(function ($stateProvider,$urlRouterProvider) {
  	$urlRouterProvider.otherwise('/')
    $stateProvider
      .state('houses', {
        url: '/houses',
        templateUrl: 'app/houses/houses.html',
        controller: 'HousesCtrl'
      });
  });