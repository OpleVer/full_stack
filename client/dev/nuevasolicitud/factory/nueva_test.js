'use strict';

describe('Nueva', function() {
    var _Nueva;

    beforeEach(module('test'));

    beforeEach(inject(function($injector) {
      _Nueva = $injector.get('Nueva');
    }));

    describe('instance', function() {
      it('should have the right prop for the instance', function() {
          var _something = new _Nueva();

          expect(_something.something).toEqual(123);
      });
    });

    describe('isValid', function() {
      it('should return true', function() {
          var _something = new _Nueva();

          expect(_something.isValid()).toBeTruthy();
      });
    });
});
