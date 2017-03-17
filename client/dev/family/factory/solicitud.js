;(function(ng) {
  'use strict';

  ng.module('test')
    .factory('Solicitud', [
      function() {
        class Solicitud {
          constructor() {
            this.something = 123;
          }
          
          isValid() {
            return !!this.something;
          }
        }

        return Solicitud;
      }
    ]);
}(window.angular));
