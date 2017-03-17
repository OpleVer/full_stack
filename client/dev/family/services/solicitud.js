;(function(ng) {
  'use strict';

  ng.module('test')
    .service('solicitud', [
      '$q',
      function($q) {
        this.doSomething = function() {
          return $q.when({yo: '!'});
        };
      }
    ]);
}(window.angular));
