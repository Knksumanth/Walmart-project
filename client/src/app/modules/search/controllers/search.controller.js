(function() {
  'use strict';

  /**
   * @ngdoc controller
   * @name search.controller: searchCtrl
   *
   * @description
   *
   * This controller is responsible for passing the search string to home controller to help display results
   *
   * @requires $rootScope
   * @requires DataService
   * @requires $state
   *
   */
    angular.module('search').controller('searchCtrl', searchCtrl);

        searchCtrl.$inject = ['$rootScope', 'DataService', '$state'];

        function searchCtrl($rootScope, dataService, $state) {

          /**
           * @ngdoc property
           * @name searchvm
           *
           * @propertyOf search.controller: searchCtrl
           *
           * @description
           * A named variable for the `this` keyword representing the ViewModel
           */
            var searchvm = this;

            searchvm.getSearchResults = getSearchResults;

          /**
           * @ngdoc method
           * @name getSearchResults
           * @methodOf search.controller: searchCtrl
           *
           * @description
           * This method will send search string to home controller where results are displayed
           *
           * @param {String} str String the search string entered by the customer
           * @returns {undefined} It doesn't return
           */
            function getSearchResults(str) {
              $state.go('root.home', { searchString: str});
            }
        }
})();
