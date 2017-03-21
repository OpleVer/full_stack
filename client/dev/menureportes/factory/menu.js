;(function(ng) {
  'use strict';

  ng.module('test')
    .factory('Menu', [
      function() {
        class Menu {
          constructor() {
            this.something = 123;
          }
          
          isValid() {
            return !!this.something;
          }
        }

        return Menu;
      }
    ]);
}(window.angular));
