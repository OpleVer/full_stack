;(function(ng) {
  'use strict';

  ng.module('test')
    .service('bitacora', [
      '$q',
      function($q) {
        this.doSomething = function() {
          return $q.when({yo: '!'});
        };
      }
    ]);
}(window.angular));
