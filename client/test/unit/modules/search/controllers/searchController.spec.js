/* jshint undef:false*/
(function() {
  'use strict';

  describe('searchCtrl', function() {
    var searchController, rootScope, q, state, scope;

    beforeEach(module('app', function () {

    }));
    beforeEach(module('search'));
    beforeEach(inject(function($rootScope, $controller, $q, $state) {
      rootScope = $rootScope;
      scope = rootScope.$new();
      q = $q;
      state = $state;
      searchController = $controller('searchCtrl as searchvm', {
        $scope : scope
      });
    })); 
    describe('getSearchResults ',function(){
      beforeEach(function(){
        spyOn(state, 'go');
      });
      it("should call getSearchResults and send search string to home module", function() {
        var expectedState = 'root.home';
        searchController.getSearchResults('ipod');
        rootScope.$digest();
        expect(state.go).toHaveBeenCalledWith(expectedState, { searchString: 'ipod'});
      });
    });
  });
})();

