;(function(ng) {
  'use strict';

  ng.module('test')
    .service('procedencia', [
      '$q',
      function($q) {
        this.doSomething = function() {
          return $q.when({yo: '!'});
        };
      }
    ]);
}(window.angular));
