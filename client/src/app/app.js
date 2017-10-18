(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

  function config($stateProvider, $urlRouterProvider, $logProvider, $provide, $httpProvider) {
    $urlRouterProvider.otherwise('/search');
    $logProvider.debugEnabled(true);
    $provide.factory('httpInterceptor', function($q, $log) {
      return {
        request: function(config) {
          return config;
        },
        requestError: function(rejection) {
          return $q.reject(rejection);
        },
        response: function(response) {
          $log.debug('response: ', response);
          return response;
        },
        responseError: function(rejection) {
          $log.debug(rejection);
          return $q.reject(rejection);
        }
      };
    });
    $httpProvider.interceptors.push('httpInterceptor');

    $stateProvider
      .state('root', {
      });
  }

  function run($rootScope) {
  
  }


  function MainCtrl($log) {
    
  }

  angular.module('app', [
      'ui.router',
      'ui.bootstrap',
      'home',
      'search',
      'common',
      'templates'
    ])
    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
