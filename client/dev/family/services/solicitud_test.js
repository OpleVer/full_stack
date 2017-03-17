'use strict';

describe('solicitud', function() {
  var _solicitud;

  beforeEach(module('test'));

  beforeEach(inject(function($injector) {
    _solicitud = $injector.get('solicitud');
  }));

  describe('doSomething', function() {
	it('should be an object', function() {
		expect(typeof _solicitud).toBe('object');
	})
	  
    it('should doSomething', function() {
      _solicitud.doSomething();
    });
  });
});
