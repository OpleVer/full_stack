'use strict';

describe('expediente', function() {
  var _expediente;

  beforeEach(module('test'));

  beforeEach(inject(function($injector) {
    _expediente = $injector.get('expediente');
  }));

  describe('creation', function() {
    it('return a function', function() {
      expect(typeof _expediente).toBe('function');
    });
  });

  describe('isValid', function() {
    it('should be valid if name and birth date is setted', function() {
      var m = new _expediente();
      m.name = 'Felipe Smith';
      m.birthDate = new Date();

      expect(m.isValid()).toBe(true);
    });

    it('should be not valid if name or birth date is not setted', function () {
      var m1 = new _expediente();
      expect(m1.isValid()).toBe(false);

      var m2 = new _expediente();
      m2.birthDate = new Date();
      expect(m2.isValid()).toBe(false);

      var m3 = new _expediente();
      m3.name = 'Felipe Smith';
      expect(m3.isValid()).toBe(false);
    })
  })
});
