;(function(ng) {
  'use strict';

  ng.module('test')
    .factory('procedencia', [
      function() {
        class procedencia {
          constructor() {
            this.name = '';
            this.birthDate = null;
          }

          isValid() {
            return !!this.name && !!this.birthDate;
          }
        }

        return procedencia;
      }
    ]);
}(window.angular));
