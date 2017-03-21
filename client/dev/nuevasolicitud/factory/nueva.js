;(function(ng) {
  'use strict';

  ng.module('test')
    .factory('Nueva', [
      function() {
        class Nueva {
          constructor() {
            this.something = 123;
          }
          
          isValid() {
            return !!this.something;
          }
        }

        return Nueva;
      }
    ]);
}(window.angular));
