'use strict';

describe('Procedencia', function() {
    var _Procedencia;

    beforeEach(module('test'));

    beforeEach(inject(function($injector) {
      _Procedencia = $injector.get('Procedencia');
    }));

    describe('instance', function() {
      it('should have the right prop for the instance', function() {
          var _something = new _Procedencia();

          expect(_something.something).toEqual(123);
      });
    });

    describe('isValid', function() {
      it('should return true', function() {
          var _something = new _Procedencia();

          expect(_something.isValid()).toBeTruthy();
      });
    });
});
