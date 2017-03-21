'use strict';

describe('bitacora', function() {
    var _scope;
    var CONTROLLER_NAME = 'bitacora as ctrl';

    beforeEach(module('test'));

    beforeEach(inject(function($injector) {
      _scope = $injector.get('$rootScope').$new();
    }));

    describe('init', function() {
      it('should create the controller correctly', inject(function($controller) {
          $controller(CONTROLLER_NAME, {$scope: _scope});
      }));      
    });
    
    describe('onLoad', function() {
      it('should load correctly', inject(function($controller) {
          // ...
      }));
    });
    
    describe('onLoad', function() {
      it('should load correctly', inject(function($controller) {
        // ... 
      }));
    });
});
