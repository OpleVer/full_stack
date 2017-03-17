'use strict';

describe('Solicitud', function() {
    var _Solicitud;

    beforeEach(module('test'));

    beforeEach(inject(function($injector) {
      _Solicitud = $injector.get('Solicitud');
    }));

    describe('instance', function() {
      it('should have the right prop for the instance', function() {
          var _something = new _Solicitud();

          expect(_something.something).toEqual(123);
      });
    });

    describe('isValid', function() {
      it('should return true', function() {
          var _something = new _Solicitud();

          expect(_something.isValid()).toBeTruthy();
      });
    });
});
