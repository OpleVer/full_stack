;(function(ng) {
  'use strict';

  ng.module('test')
    .factory('menu', [
      function() {
        class menu {
          constructor() {
            this.name = '';
            this.birthDate = null;
          }

          isValid() {
            return !!this.name && !!this.birthDate;
          }
        }

        return menu;
      }
    ]);
}(window.angular));
