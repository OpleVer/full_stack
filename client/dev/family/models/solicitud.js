;(function(ng) {
  'use strict';

  ng.module('test')
    .factory('solicitud', [
      function() {
        class solicitud {
          constructor() {
            this.name = '';
            this.birthDate = null;
          }

          isValid() {
            return !!this.name && !!this.birthDate;
          }
        }

        return solicitud;
      }
    ]);
}(window.angular));
