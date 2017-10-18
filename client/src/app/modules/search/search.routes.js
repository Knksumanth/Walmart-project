(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
          .state('root.search', {
              url: '/search',
              views: {
                  '@': {
                      templateUrl: 'src/app/modules/search/views/search.view.html',
                      controller: 'searchCtrl as searchvm'
                  }
              }
          });
    }

    angular.module('search')
        .config(config);
})();
