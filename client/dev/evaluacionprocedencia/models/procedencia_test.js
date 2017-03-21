'use strict';

describe('procedencia', function() {
  var _procedencia;

  beforeEach(module('test'));

  beforeEach(inject(function($injector) {
    _procedencia = $injector.get('procedencia');
  }));

  describe('creation', function() {
    it('return a function', function() {
      expect(typeof _procedencia).toBe('function');
    });
  });

  describe('isValid', function() {
    it('should be valid if name and birth date is setted', function() {
      var m = new _procedencia();
      m.name = 'Felipe Smith';
      m.birthDate = new Date();

      expect(m.isValid()).toBe(true);
    });

    it('should be not valid if name or birth date is not setted', function () {
      var m1 = new _procedencia();
      expect(m1.isValid()).toBe(false);

      var m2 = new _procedencia();
      m2.birthDate = new Date();
      expect(m2.isValid()).toBe(false);

      var m3 = new _procedencia();
      m3.name = 'Felipe Smith';
      expect(m3.isValid()).toBe(false);
    })
  })
});
