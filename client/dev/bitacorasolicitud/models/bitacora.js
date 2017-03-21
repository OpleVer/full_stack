;(function(ng) {
  'use strict';

  ng.module('test')
    .factory('bitacora', [
      function() {
        class bitacora {
          constructor() {
            this.name = '';
            this.birthDate = null;
          }

          isValid() {
            return !!this.name && !!this.birthDate;
          }
        }

        return bitacora;
      }
    ]);
}(window.angular));
