'use strict';

describe('Bitacora', function() {
    var _Bitacora;

    beforeEach(module('test'));

    beforeEach(inject(function($injector) {
      _Bitacora = $injector.get('Bitacora');
    }));

    describe('instance', function() {
      it('should have the right prop for the instance', function() {
          var _something = new _Bitacora();

          expect(_something.something).toEqual(123);
      });
    });

    describe('isValid', function() {
      it('should return true', function() {
          var _something = new _Bitacora();

          expect(_something.isValid()).toBeTruthy();
      });
    });
});
