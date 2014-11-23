'use strict';

angular.module('mplsCommunityHousesApp')
  .config(function ($stateProvider,$urlRouterProvider) {
  	$urlRouterProvider.otherwise('/');
    $stateProvider
      .state('houses.directory', {
        url: '/directory',
        templateUrl: 'app/houses/directory/directory.html',
        controller: 'DirectoryCtrl'
      });
  });