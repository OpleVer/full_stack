'use strict';

describe('Expediente', function() {
    var _Expediente;

    beforeEach(module('test'));

    beforeEach(inject(function($injector) {
      _Expediente = $injector.get('Expediente');
    }));

    describe('instance', function() {
      it('should have the right prop for the instance', function() {
          var _something = new _Expediente();

          expect(_something.something).toEqual(123);
      });
    });

    describe('isValid', function() {
      it('should return true', function() {
          var _something = new _Expediente();

          expect(_something.isValid()).toBeTruthy();
      });
    });
});
