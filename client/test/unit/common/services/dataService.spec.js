/* jshint undef:false*/
(function() {
  'use strict';

describe("Service: dataService", function() {
  var dataService, $rootScope, $httpBackend;
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
var mockNoSearchResponse = {};
  var mockRecommendationsResponse = [
  {
    "itemId": 33078107,
    "parentItemId": 33078107,
    "name": "Justin Power Rechargeable Power Case for Apple iPad 2-4 and 10\" Tablet, Black",
    "offerType": "ONLINE_AND_STORE",
    "isTwoDayShippingEligible": true,
    "availableOnline": true
  },
  {
    "itemId": 44707125,
    "parentItemId": 44707125,
    "name": "OtterBox Defender Series for Apple iPad Air 2, Assorted Colors",
    "msrp": 38.99,
    "salePrice": 34.99,
    "upc": "660543369585",
    "standardShipRate": 5.99,
    "color": "Black",
    "shipToStore": true,
    "freeShipToStore": true,
    "modelNumber": "77-50969",
    "productUrl": "http://c.affil.walmart.com/t/api01?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FOtterBox-Defender-Series-for-Apple-iPad-Air-2-Assorted-Colors%2F44707125%3Faffp1%3DfFOsamHCKgqF0m53bIwNt02vmvwu0qURUwQECzLrkAU%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    "customerRating": "4.626",
    "numReviews": 1118,
    "offerType": "ONLINE_AND_STORE",
    "isTwoDayShippingEligible": true,
    "availableOnline": true
  }
];
  var mockSearchResponse = {
  "query": "apple",
  "sort": "relevance",
  "responseGroup": "base",
  "totalResults": 2312,
  "start": 1,
  "numItems": 2,
  "items": [
    {
      "itemId": 42608098,
      "parentItemId": 42608098,
      "name": "Apple 9.7-inch iPad Pro Wi-Fi - tablet - 32 GB - 9.7\"",
      "msrp": 599,
      "salePrice": 498.99,
      "upc": "762931589008",
      "categoryPath": "Electronics/iPad & Tablets/All Tablets",
      "shortDescription": "contact Sami Tasaki for content &amp; images",
      "longDescription": "&lt;b&gt;Apple iPad Pro 9.7-inch 32 GB WiFi:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;9.7-inch Retina display with True Tone and anti-reflective coating (diagonal)&lt;/li&gt;&lt;li&gt;A9X third-generation chip with 64-bit desktop-class architecture&lt;/li&gt;&lt;li&gt;Touch ID fingerprint sensor&lt;/li&gt;&lt;li&gt;12MP iSight camera with 4k video&lt;/li&gt;&lt;li&gt;5MP FaceTime HD camera&lt;/li&gt;&lt;li&gt;802.11ac Wi-Fi with MIMO&lt;/li&gt;&lt;li&gt;LTE Advanced cellular data connectivity1&lt;/li&gt;&lt;li&gt;Up to 10 hours of battery life2&lt;/li&gt;&lt;li&gt;Four speaker audio&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;* Apple Pencil and Smart Keyboard sold separately.1 Data plan required. LTE Advanced and LTE are available in select markets and through select carriers. Speeds are based on theoretical throughput and vary based on site conditions and carrier. For details on LTE support, contact your carrier and see www.apple.com/ipad/LTE.&lt;br&gt;2Battery life varies by use and configuration. See www.apple.com/batteries for more information.",
      "thumbnailImage": "https://i5.walmartimages.com/asr/cb5ce57e-5fcf-4cec-9f77-7818f041f968_1.27785993cd8645b346956dfecbd2e72f.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
      "mediumImage": "https://i5.walmartimages.com/asr/cb5ce57e-5fcf-4cec-9f77-7818f041f968_1.27785993cd8645b346956dfecbd2e72f.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
      "largeImage": "https://i5.walmartimages.com/asr/cb5ce57e-5fcf-4cec-9f77-7818f041f968_1.27785993cd8645b346956dfecbd2e72f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      "productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip%252FApple-9-7-inch-iPad-Pro-Wi-Fi-tablet-32-GB-9-7%252F42608098%253Faffp1%253DfFOsamHCKgqF0m53bIwNt02vmvwu0qURUwQECzLrkAU%2526affilsrc%253Dapi",
      "standardShipRate": 0,
      "marketplace": true,
      "modelNumber": "MLMN2LL/A",
      "sellerInfo": "deal dealer",
      "productUrl": "http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FApple-9-7-inch-iPad-Pro-Wi-Fi-tablet-32-GB-9-7%2F42608098%3Faffp1%3DfFOsamHCKgqF0m53bIwNt02vmvwu0qURUwQECzLrkAU%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
      "customerRating": "4.821",
      "numReviews": 72,
      "customerRatingImage": "http://i2.walmartimages.com/i/CustRating/4_8.gif",
      "categoryNode": "3944_1078524_1078084",
      "bundle": false,
      "stock": "Available",
      "addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D42608098%7C1%26affp1%3DfFOsamHCKgqF0m53bIwNt02vmvwu0qURUwQECzLrkAU%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
      "affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D42608098%257C1%2526affp1%253DfFOsamHCKgqF0m53bIwNt02vmvwu0qURUwQECzLrkAU%2526affilsrc%253Dapi",
      "freeShippingOver50Dollars": false,
      "offerType": "ONLINE_ONLY",
      "availableOnline": true
    },
    {
      "itemId": 42608097,
      "parentItemId": 42608097,
      "name": "Apple iPad Pro 9.7-inch 128GB WiFi",
      "msrp": 799.99,
      "salePrice": 699,
      "upc": "888462762670",
      "categoryPath": "Electronics/iPad & Tablets/All Tablets",
      "shortDescription": "contact Sami Tasaki for content &amp; images",
      "longDescription": "&lt;b&gt;Apple iPad Pro 9.7-inch 128GB WiFi:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;9.7-inch Retina display with True Tone and anti-reflective coating (diagonal)&lt;/li&gt;&lt;li&gt;A9X third-generation chip with 64-bit desktop-class architecture&lt;/li&gt;&lt;li&gt;Touch ID fingerprint sensor&lt;/li&gt;&lt;li&gt;12MP iSight camera with 4k video&lt;/li&gt;&lt;li&gt;5MP FaceTime HD camera&lt;/li&gt;&lt;li&gt;802.11ac Wi-Fi with MIMO&lt;/li&gt;&lt;li&gt;LTE Advanced cellular data connectivity1&lt;/li&gt;&lt;li&gt;Up to 10 hours of battery life2&lt;/li&gt;&lt;li&gt;Four speaker audio&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;* Apple Pencil and Smart Keyboard sold separately.1 Data plan required. LTE Advanced and LTE are available in select markets and through select carriers. Speeds are based on theoretical throughput and vary based on site conditions and carrier. For details on LTE support, contact your carrier and see www.apple.com/ipad/LTE.&lt;br&gt;2Battery life varies by use and configuration. See www.apple.com/batteries for more information.",
      "thumbnailImage": "https://i5.walmartimages.com/asr/f48e8687-2dc5-47e6-bdef-fe99b95c3674_1.ab9c2e11ea5c40ecb7f7959ec4f94a93.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
      "mediumImage": "https://i5.walmartimages.com/asr/f48e8687-2dc5-47e6-bdef-fe99b95c3674_1.ab9c2e11ea5c40ecb7f7959ec4f94a93.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
      "largeImage": "https://i5.walmartimages.com/asr/f48e8687-2dc5-47e6-bdef-fe99b95c3674_1.ab9c2e11ea5c40ecb7f7959ec4f94a93.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      "productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip%252FApple-iPad-Pro-9-7-inch-128GB-WiFi%252F42608097%253Faffp1%253DfFOsamHCKgqF0m53bIwNt02vmvwu0qURUwQECzLrkAU%2526affilsrc%253Dapi",
      "standardShipRate": 0,
      "marketplace": false,
      "modelNumber": "MLMV2LL/A",
      "productUrl": "http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FApple-iPad-Pro-9-7-inch-128GB-WiFi%2F42608097%3Faffp1%3DfFOsamHCKgqF0m53bIwNt02vmvwu0qURUwQECzLrkAU%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
      "customerRating": "4.865",
      "numReviews": 63,
      "customerRatingImage": "http://i2.walmartimages.com/i/CustRating/4_9.gif",
      "categoryNode": "3944_1078524_1078084",
      "bundle": false,
      "stock": "Available",
      "addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D42608097%7C1%26affp1%3DfFOsamHCKgqF0m53bIwNt02vmvwu0qURUwQECzLrkAU%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
      "affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D42608097%257C1%2526affp1%253DfFOsamHCKgqF0m53bIwNt02vmvwu0qURUwQECzLrkAU%2526affilsrc%253Dapi",
      "isTwoDayShippingEligible": true,
      "availableOnline": true
    }
  ],
  "facets": []
};

  beforeEach(module('app'));
  beforeEach(module('common'));
  beforeEach(inject(function(_DataService_, _$rootScope_, _$httpBackend_) {
    dataService = _DataService_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
  }));
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('call getResults function with success callback',function(){
    beforeEach(function(){
        $httpBackend.whenGET("https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/items?ids=42608098,42608097&apiKey=rq5vddrwrr9cxcrfwn9nqdtz").respond(mockRecommendedItemDetails);
      });
    it('should get search results with success', function() {
      $httpBackend.expectGET('https://cors-anywhere.herokuapp.com/https://api.walmartlabs.com/v1/search?apiKey=rq5vddrwrr9cxcrfwn9nqdtz&query=ipod').respond(mockSearchResponse);

     var searchString = 'ipod'; 
      var returnedData = dataService.getResults(searchString);
     returnedData.then(function(result){

     });
     $httpBackend.flush();

      var successHandler = jasmine.createSpy('success');
      var errorHandler = jasmine.createSpy('error');

      returnedData.then(successHandler, errorHandler).finally(function() {
        expect(successHandler).toHaveBeenCalled();
        expect(errorHandler).not.toHaveBeenCalled();
      });
    });
  });

   describe('call getResults function with success callback but no results found',function(){
    beforeEach(function(){
        $httpBackend.whenGET("https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/items?ids=42608098,42608097&apiKey=rq5vddrwrr9cxcrfwn9nqdtz").respond(mockRecommendedItemDetails);
      });
    it('should get search results with success', function() {
      $httpBackend.expectGET('https://cors-anywhere.herokuapp.com/https://api.walmartlabs.com/v1/search?apiKey=rq5vddrwrr9cxcrfwn9nqdtz&query=ipod').respond(mockNoSearchResponse);

     var searchString = 'ipod'; 
      var returnedData = dataService.getResults(searchString);
     returnedData.then(function(result){

     });
     $httpBackend.flush();

      var successHandler = jasmine.createSpy('success');
      var errorHandler = jasmine.createSpy('error');

      returnedData.then(successHandler, errorHandler).finally(function() {
        expect(successHandler).toHaveBeenCalled();
        expect(errorHandler).not.toHaveBeenCalled();
      });
    });
  });
  
    describe('call getResults function with error callback',function(){
    beforeEach(function(){
        $httpBackend.whenGET("https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/items?ids=42608098,42608097&apiKey=rq5vddrwrr9cxcrfwn9nqdtz").respond(500);
      });
    it('should get search results with success', function() {
      $httpBackend.expectGET('https://cors-anywhere.herokuapp.com/https://api.walmartlabs.com/v1/search?apiKey=rq5vddrwrr9cxcrfwn9nqdtz&query=ipod').respond(500);

     var searchString = 'ipod'; 
      var returnedData = dataService.getResults(searchString);
     returnedData.then(function(result){
      
     });
     $httpBackend.flush();

      var successHandler = jasmine.createSpy('success');
      var errorHandler = jasmine.createSpy('error');

      returnedData.then(successHandler, errorHandler).finally(function() {
        expect(successHandler).not.toHaveBeenCalled();
        expect(errorHandler).toHaveBeenCalled();
      });
    });
  });

    describe('call getRecommendations function with success callback',function(){
      beforeEach(function(){
        $httpBackend.whenGET("https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/items?ids=33078107,44707125&apiKey=rq5vddrwrr9cxcrfwn9nqdtz").respond(mockRecommendedItemDetails);
      });
      it('should get Recommendations results with success', function() {
        $httpBackend.expectGET('https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/nbp?apiKey=rq5vddrwrr9cxcrfwn9nqdtz&itemId=37648947').respond(mockRecommendationsResponse);

       var itemID = '37648947'; 
        var returnedData = dataService.getRecommendations(itemID);
       returnedData.then(function(result){

       });
       $httpBackend.flush();
       var successHandler = jasmine.createSpy('success');
      var errorHandler = jasmine.createSpy('error');

      returnedData.then(successHandler, errorHandler).finally(function() {
        expect(successHandler).toHaveBeenCalled();
        expect(errorHandler).not.toHaveBeenCalled();
      });
      });
    });

    describe('call getRecommendations function with success callback but no recommendations',function(){
      beforeEach(function(){
        $httpBackend.whenGET("https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/items?ids=33078107,44707125&apiKey=rq5vddrwrr9cxcrfwn9nqdtz").respond(mockRecommendedItemDetails);
      });
      it('should get Recommendations results with success', function() {
        $httpBackend.expectGET('https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/nbp?apiKey=rq5vddrwrr9cxcrfwn9nqdtz&itemId=37648947').respond(mockNoSearchResponse);

       var itemID = '37648947'; 
        var returnedData = dataService.getRecommendations(itemID);
       returnedData.then(function(result){

       });
       $httpBackend.flush();
       var successHandler = jasmine.createSpy('success');
      var errorHandler = jasmine.createSpy('error');

      returnedData.then(successHandler, errorHandler).finally(function() {
        expect(successHandler).toHaveBeenCalled();
        expect(errorHandler).not.toHaveBeenCalled();
      });
      });
    });

    describe('call getRecommendations function with error callback',function(){
      beforeEach(function(){
        $httpBackend.whenGET("https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/items?ids=33078107,44707125&apiKey=rq5vddrwrr9cxcrfwn9nqdtz").respond(500);
      });
      it('should get Recommendations results with success', function() {
        $httpBackend.expectGET('https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/nbp?apiKey=rq5vddrwrr9cxcrfwn9nqdtz&itemId=37648947').respond(500);

       var itemID = '37648947'; 
        var returnedData = dataService.getRecommendations(itemID);
       returnedData.then(function(result){

       });
       $httpBackend.flush();
       var successHandler = jasmine.createSpy('success');
      var errorHandler = jasmine.createSpy('error');

      returnedData.then(successHandler, errorHandler).finally(function() {
        expect(successHandler).not.toHaveBeenCalled();
        expect(errorHandler).toHaveBeenCalled();
      });
      });
    });

});
})();
