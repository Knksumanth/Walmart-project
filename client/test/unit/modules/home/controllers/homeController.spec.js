/* jshint undef:false*/
(function() {
  'use strict';

  describe('HomeCtrl', function() {
    var homeController, rootScope, q, state, mockDataService, scope, stateParams;
     var mockRecommendedItemDetails = {
          "items": [
            {
              "itemId": 33078107,
              "parentItemId": 33078107,
              "name": "Justin Power Rechargeable Power Case for Apple iPad 2-4 and 10\" Tablet, Black",
              "isTwoDayShippingEligible": true,
              "availableOnline": true
            },
            {
              "itemId": 44707125,
              "parentItemId": 40659245,
              "name": "Apple iPad Air & Air 2 Smart Cover",
              "availableOnline": true
            }
          ]
        };
        var mockUpString = 'ipod';
    beforeEach(module('app', function () {

    }));
    beforeEach(module('home'));
    beforeEach(inject(function($rootScope, $controller, $q, $state, _DataService_, $stateParams) {
      rootScope = $rootScope;
      scope = rootScope.$new();
      q = $q;
      state = $state;
      stateParams = $stateParams;
      mockDataService = _DataService_;
      homeController = $controller('HomeCtrl', {
        $scope : scope,
        mockDataService : _DataService_
      });
    }));
    
    describe('retrieveInfo',function(){
      beforeEach(function(){
        stateParams.searchString = 'ipod';
      });
      it("should call retrieveInfo and redirect to search page if search string is not available", function() {
        homeController.retrieveInfo();
      });
    });

    describe('getResults',function(){
      beforeEach(function(){
        spyOn(mockDataService, 'getResults').and.callFake(function(mockUpString){
          var deferred = q.defer();
          deferred.resolve(mockRecommendedItemDetails);
        });
      });
      it("should call getResults and retrieve results", function() {
        var string = 'ipod';
        homeController.getResults(string);
      });
    });


  });
})();

