'use strict';

describe('Service: house', function () {

  // load the service's module
  beforeEach(module('mplsCommunityHousesApp'));

  // instantiate service
  var house;
  beforeEach(inject(function (_house_) {
    house = _house_;
  }));

  it('should do something', function () {
    expect(!!house).toBe(true);
  });

});
