'use strict';

describe('Controller: HousesCtrl', function () {

  // load the controller's module
  beforeEach(module('mplsCommunityHousesApp'));

  var HousesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HousesCtrl = $controller('HousesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
