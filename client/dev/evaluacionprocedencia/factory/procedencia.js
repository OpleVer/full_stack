;(function(ng) {
  'use strict';

  ng.module('test')
    .factory('Procedencia', [
      function() {
        class Procedencia {
          constructor() {
            this.something = 123;
          }
          
          isValid() {
            return !!this.something;
          }
        }

        return Procedencia;
      }
    ]);
}(window.angular));
