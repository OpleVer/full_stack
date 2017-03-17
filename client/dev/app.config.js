;(function(ng) {
  "use strict";

  ng.module("test")
    .config([
      "$locationProvider",
      function($locationProvider) {
        
        $locationProvider.html5Mode(true);
        
      }
    ]);
}(window.angular));
