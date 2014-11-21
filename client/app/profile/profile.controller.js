'use strict';

angular.module('mplsCommunityHousesApp')
  .controller('ProfileCtrl', function ($scope,$timeout,$http, User,Auth) {
  	$scope.house = {};

  	var house = Auth.getCurrentUser().house;
  	if(house){
  		$scope.house = house;

  	}

    // console.log($scope.house, User.get(), Auth.getCurrentUser()._id)

    $scope.errors = {};
    $scope.saveMessage = false;

    $scope.submit = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
      	console.log($scope.house)
        debugger

        var updatedUser = User.get();
        updatedUser.house = $scope.house;
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
