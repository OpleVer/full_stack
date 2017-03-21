;(function(ng) {
  'use strict';

  ng.module('test')
    .factory('Bitacora', [
      function() {
        class Bitacora {
          constructor() {
            this.something = 123;
          }
          
          isValid() {
            return !!this.something;
          }
        }

        return Bitacora;
      }
    ]);
}(window.angular));
