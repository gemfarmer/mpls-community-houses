'use strict';

angular.module('mplsCommunityHousesApp')
  .controller('ProfileCtrl', function ($scope,$timeout,$http, User,Auth) {
  	$scope.house = {};

    $http.get('/api/house/'+Auth.getCurrentUser().houseId).success(function(house) {
      $scope.house = house;
    });

    $scope.errors = {};
    $scope.saveMessage = false;

    $scope.submit = function(form) {
      $scope.submitted = true;

      if(form.$valid) {

        var updatedUser = User.get();
        updatedUser.house = $scope.house;
        $http.put('/api/house/'+Auth.getCurrentUser().houseId, $scope.house).success(function(house) {
          $scope.house = house;
        });
        var id = { id: Auth.getCurrentUser()._id };
        User.update(id, updatedUser,function(req,res){
          $scope.saveMessage = true;
          $timeout(function(){
            $scope.saveMessage = false;
          },2000);
        });

      }
    };


  });
