(function() {
  'use strict';

  /**
   * @ngdoc controller
   * @name home.controller: HomeCtrl
   *
   * @description
   *
   * This controller is responsible for displaying products based on search.
   *
   * @requires $rootScope
   * @requires $state
   * @requires $stateParams
   * @requires DataService
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$rootScope', '$state', '$stateParams', 'DataService'];

  /* @ngInject */
  function HomeCtrl($rootScope, $state, $stateParams, dataService) {

    /**
     * @ngdoc property
     * @name homevm
     * @propertyOf home.controller: HomeCtrl
     *
     * @description
     * A named variable for the `this` keyword representing the ViewModel
     */
    var homevm = this;
    homevm.retrieveInfo = retrieveInfo;
    homevm.getResults = getResults;
    retrieveInfo();
    var isLoading; 

    /**
     * @ngdoc method
     * @name retrieveInfo
     * @methodOf home.controller: HomeCtrl
     *
     * @description
     * This method will call the getResults function if search string is available, else redirects user to Search Page.
     *
     * @returns {undefined} It doesn't return
     */
    function retrieveInfo(){

      if($stateParams.searchString){
        homevm.isLoading = true;
        getResults($stateParams.searchString);
      }
      else{
        $state.go('root.search');
      }

    }

    /**
     * @ngdoc method
     * @name getResults
     * @methodOf home.controller: HomeCtrl
     *
     * @description
     * This method will make service call for getting products list related to the string.
     *
     * @returns {undefined} It doesn't return
     */
    function getResults (str) {
      dataService.getResults(str).then(function (response){
        homevm.isLoading = false;
        homevm.products = response.items;
      }, function (error){
         $state.go('root.search');
      });
    }
  }
})();
