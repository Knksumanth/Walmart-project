(function() {
  'use strict';

  function config($stateProvider) {
    $stateProvider
      .state('root.home', {
        url: '/home',
        params: {
              searchString: null
                },
        views: {
          '@': {
            templateUrl: 'src/app/modules/home/views/home.view.html',
            controller: 'HomeCtrl as homevm'
          }
        }
      });
  }

  angular.module('home')
    .config(config);
})();
