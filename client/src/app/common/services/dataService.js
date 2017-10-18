(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name common.service: DataService
   *
   * @description
   *
   *
   * The DataService used for getting product details using walmart APIs
   *
   * @requires $http
   * @requires $q
   */
    angular
        .module('common')
        .factory('DataService', dataService);

      function dataService($http, $q) {

        var apiKey = 'rq5vddrwrr9cxcrfwn9nqdtz';
        var info;
      /**
       * @ngdoc method
       * @name getResults
       * @methodOf common.service: DataService
       *
       * @description
       * Gets products list based on the input search string
       *
       * @param {String} searchString String input search string entered by the customer
       *
       * @returns {Promise} returns a promise, success or error
       */
         function getResults(searchString) {
          
          var deferred = $q.defer();
           $http.get('https://cors-anywhere.herokuapp.com/https://api.walmartlabs.com/v1/search?apiKey='+apiKey+'&query='+searchString).then(function (result)
           {
            
            var itemList = []; var i = 0;
            
             _.forEach(result.data.items, function (object) {
                              itemList[i++] = _.pick(object, ['itemId']);
                      });
             
             if(itemList.length > 1)
             {  
              var itemStr = itemList[0].itemId;

              for (var a = 1; a < itemList.length; a++) {
                   itemStr = itemStr +','+itemList[a].itemId;  
                  }

              $http.get('https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/items?ids='+itemStr+'&apiKey='+apiKey).then(function (result){
                deferred.resolve(result.data);
              })
             }
             else{
              deferred.resolve("No Results");
             }
          }, function(err){

            deferred.reject({success: false});
          })
        
        return deferred.promise;
        }


         /**
       * @ngdoc method
       * @name getRecommendations
       * @methodOf common.service: DataService
       *
       * @description
       * Gets recommended products list based on which item is currently being viewed
       *
       * @param {String} itemID String the id of the item that is currently being viewed
       *
       * @returns {Promise} returns a promise, success or error
       */

        function getRecommendations(itemID) {
          var deferred = $q.defer();
           $http.get('https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/nbp?apiKey='+apiKey+'&itemId='+itemID).then(function (result)
           {
            
            var itemList = []; var i = 0;
                        
           _.forEach(result.data, function (object) {
                            itemList[i++] = _.pick(object, ['itemId']);
                    });
           
          if(itemList.length > 1)
          {
                var itemStr = itemList[0].itemId;

                for (var a = 1; (a < 10 && a < itemList.length); a++) {
                     itemStr = itemStr +','+itemList[a].itemId;  
                    }
              
            $http.get('https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/items?ids='+itemStr+'&apiKey='+apiKey).then(function (result){
              deferred.resolve(result.data);
            })
          }
          else{
            deferred.resolve("No Recommendations");
          }

          }, function(err){

            deferred.reject({success: false});
          })
        
        return deferred.promise;
        }

        return {
          getResults: getResults,
          getRecommendations: getRecommendations
        };
      }

})();
