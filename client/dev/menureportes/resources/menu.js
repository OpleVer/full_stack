;(function(ng) {
  'use strict';

  ng.module('test')
    .factory('menu', [
      '$resource',
      function($resource) {
        const _url = '/api/menu/:id';

        const _params = {
          id: '@id'
        };

        const _method = {
          update: {
            method: 'PUT',
            isArray: false
          },
          insert: {
            method: 'POST',
            isArray: false
          },
          getAll: {
            method: 'GET',
            isArray: true
          },
          getById: {
            method: 'GET',
            isArray: false
          },
          delete: {
            method: 'DELETE',
            isArray: false
          },
        };

        return $resource(_url, _params, _method);
      }
    ]);
}(window.angular));
