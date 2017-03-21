'use strict';

describe('menu', function() {
  var _menu;

  beforeEach(module('test'));

  beforeEach(inject(function($injector) {
    _menu = $injector.get('menu');
  }));

  describe('doSomething', function() {
	it('should be an object', function() {
		expect(typeof _menu).toBe('object');
	})
	  
    it('should doSomething', function() {
      _menu.doSomething();
    });
  });
});
