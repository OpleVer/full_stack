'use strict';

describe('bitacora', function() {
  var _bitacora;

  beforeEach(module('test'));

  beforeEach(inject(function($injector) {
    _bitacora = $injector.get('bitacora');
  }));

  describe('doSomething', function() {
	it('should be an object', function() {
		expect(typeof _bitacora).toBe('object');
	})
	  
    it('should doSomething', function() {
      _bitacora.doSomething();
    });
  });
});
