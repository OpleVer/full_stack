'use strict';

describe('bitacora', function() {
  var _bitacora;

  beforeEach(module('test'));

  beforeEach(inject(function($injector) {
    _bitacora = $injector.get('bitacora');
  }));

  describe('creation', function() {
    it('return a function', function() {
      expect(typeof _bitacora).toBe('function');
    });
  });

  describe('isValid', function() {
    it('should be valid if name and birth date is setted', function() {
      var m = new _bitacora();
      m.name = 'Felipe Smith';
      m.birthDate = new Date();

      expect(m.isValid()).toBe(true);
    });

    it('should be not valid if name or birth date is not setted', function () {
      var m1 = new _bitacora();
      expect(m1.isValid()).toBe(false);

      var m2 = new _bitacora();
      m2.birthDate = new Date();
      expect(m2.isValid()).toBe(false);

      var m3 = new _bitacora();
      m3.name = 'Felipe Smith';
      expect(m3.isValid()).toBe(false);
    })
  })
});
