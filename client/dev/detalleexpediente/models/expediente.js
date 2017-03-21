;(function(ng) {
  'use strict';

  ng.module('test')
    .factory('expediente', [
      function() {
        class expediente {
          constructor() {
            this.name = '';
            this.birthDate = null;
          }

          isValid() {
            return !!this.name && !!this.birthDate;
          }
        }

        return expediente;
      }
    ]);
}(window.angular));
