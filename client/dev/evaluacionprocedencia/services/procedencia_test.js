'use strict';

describe('procedencia', function() {
  var _procedencia;

  beforeEach(module('test'));

  beforeEach(inject(function($injector) {
    _procedencia = $injector.get('procedencia');
  }));

  describe('doSomething', function() {
	it('should be an object', function() {
		expect(typeof _procedencia).toBe('object');
	})
	  
    it('should doSomething', function() {
      _procedencia.doSomething();
    });
  });
});
