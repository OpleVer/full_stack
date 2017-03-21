;(function(ng) {
  'use strict';

  ng.module('test')
    .factory('Expediente', [
      function() {
        class Expediente {
          constructor() {
            this.something = 123;
          }
          
          isValid() {
            return !!this.something;
          }
        }

        return Expediente;
      }
    ]);
}(window.angular));
