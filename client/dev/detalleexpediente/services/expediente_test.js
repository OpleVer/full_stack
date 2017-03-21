'use strict';

describe('expediente', function() {
  var _expediente;

  beforeEach(module('test'));

  beforeEach(inject(function($injector) {
    _expediente = $injector.get('expediente');
  }));

  describe('doSomething', function() {
	it('should be an object', function() {
		expect(typeof _expediente).toBe('object');
	})
	  
    it('should doSomething', function() {
      _expediente.doSomething();
    });
  });
});
