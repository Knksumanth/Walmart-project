(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name home.directive: itemList
   * @restrict E
   *
   * @description
   *
   * The itemList directive renders simple list
   *
   * @param {Array} itemList Data structure used for list rendering
   *
   */
  angular
    .module('home')
    .directive('itemList', itemList);

  itemList.$inject = ['DataService'];

  /* @ngInject */
  function itemList(dataService) {
    var directive = {
      link: link,
      restrict: 'E',
      scope: {
        itemList: '='
      },
      templateUrl: 'src/app/modules/home/directives/item-list/itemList.view.html'
    };
    return directive;

    function link(scope) {

/**
       * @ngdoc method
       * @name getRecommendations
       * @methodOf home.directive: itemList
       *
       * @description
       *
       * This method will pull all recommendations based on selected items
       *
       * @param {Array} itemsList Array
       * @param {String} itemId String
       *
       * @returns {undefined} It doesn't return
       */
     scope.getRecommendations  = function(itemsList, itemId) {
            _.forEach(itemsList, function (item) {
                            /*istanbul ignore else */
                            if(item.itemId == itemId){
                              scope.selectedItem = item;
                            }
                    });
             dataService.getRecommendations(itemId).then(function (response){
                    if(response.items){
                      scope.recommendations = response.items;
                    }
                    else{
                      scope.noRecommendations = "No Recommendations available for this item";
                    }
                  }, /*istanbul ignore next */
                  function (error){
                     $state.go('root.search');
                  });
            };

    }
  }

})();
