'use strict';

angular
  .module('i8.icon')
  .config([
    '$injector',
    function($injector) {

      providers.logProvider = function() {
        return $injector.get('$log');
      };

      providers.httpProvider = function() {
        var
          $http = $injector.get('$http'),
          $templateCache = $injector.get('$templateCache')
          ;

        return function(url) {
          return $http.get(url, { cache: $templateCache });
        }
      };

      providers.nodeWrapperProvider = function() {
        return function(node) {
          return angular.element(node);
        }
      };

      providers.PromiseProvider = function() {
        return $injector.get('$q');
      }

    }
  ]);