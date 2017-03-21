'use strict';

describe('Menu', function() {
    var _Menu;

    beforeEach(module('test'));

    beforeEach(inject(function($injector) {
      _Menu = $injector.get('Menu');
    }));

    describe('instance', function() {
      it('should have the right prop for the instance', function() {
          var _something = new _Menu();

          expect(_something.something).toEqual(123);
      });
    });

    describe('isValid', function() {
      it('should return true', function() {
          var _something = new _Menu();

          expect(_something.isValid()).toBeTruthy();
      });
    });
});
