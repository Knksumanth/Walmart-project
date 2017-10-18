/* jshint undef:false*/
(function() {
  'use strict';

  describe("Directive: itemList", function() {

    var scope, directiveScope, element, actualOptions;
    var mockupProducts = [
    {
      "itemId": 42608121,
      "name": "Apple iPod touch 16GB",
      "shortDescription": "&lt;p&gt;Whether you're an avid gamer looking for a more powerful way to play, a music devotee seeking a better portable music experience, or a hobbyist photographer with an adventurous streak, the Apple 16 GB iPod touch packs a host of awesome features into a sleek package. A stunningly crisp 4-inch Retina display, a powerful A8 chip and M8 motion coprocessor make for a beautifully detailed, highly responsive gaming experience. Connect to Wi-Fi to FaceTime with friends and family, download music and games, send messages to your friends or post to social media. Capture the fun of impromptu gatherings with the iPod's 8-megapixel iSight camera with exposure control and improved HDR and face detection. And of course, the iPod touch is a sleek way to keep your music with you, and access the iTunes Store to grab your next favorite album. Attractive and designed to go with you everywhere, the iPod touch is available in 5 stunning colors to suit anyone's taste.&lt;/p&gt;",
      "longDescription": "&lt;b&gt;Apple iPod touch 16GB, Assorted Colors:&lt;/b&gt;&lt;div style=&quot;margin-left: 2em&quot;&gt;&lt;b&gt;Key Features:&lt;/b&gt;&lt;/div&gt;&lt;ul&gt;&lt;li&gt;4-inch Retina display&lt;/li&gt;&lt;li&gt;A8 with M8 motion coprocessor&lt;/li&gt;&lt;li&gt;8MP iSight &amp; FaceTime cameras&lt;/li&gt;&lt;li&gt;1080p HD video recording&lt;/li&gt;&lt;li&gt;802.11ac Wi-Fi &amp; Bluetooth 4.1&lt;/li&gt;&lt;li&gt;Up to 40 hours audio playback&lt;/li&gt;&lt;/ul&gt;&lt;div style=&quot;margin-left: 2em&quot;&gt;&lt;b&gt;Legal&lt;/b&gt;&lt;br&gt;iPod models are not available in all colors at all resellers.&lt;br&gt;Membership required. Requires initial sign-up. At the end of the trial period, the membership will automatically renew and payment method will be charged on a monthly basis until autorenewal is turned off in account settings.&lt;br&gt;FaceTime calling requires a FaceTime-enabled device with a Wi-Fi connection.&lt;br&gt; Display size is measured diagonally.&lt;br&gt;Rechargeable batteries have a limited number of charge cycles and may eventually need to be replaced. Battery life and number of charge cycles vary by use and settings. See www.apple.com/batteries for more information.&lt;br&gt;TM and (C) 2015 Apple Inc. All rights reserved.&lt;/div&gt;",
      "thumbnailImage": "https://i5.walmartimages.com/asr/e8b292ba-04f1-454f-a629-e41bba6c79ab_1.acd37096b0d504f6a93251180266c834.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
      "mediumImage": "https://i5.walmartimages.com/asr/e8b292ba-04f1-454f-a629-e41bba6c79ab_1.acd37096b0d504f6a93251180266c834.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
      "largeImage": "https://i5.walmartimages.com/asr/e8b292ba-04f1-454f-a629-e41bba6c79ab_1.acd37096b0d504f6a93251180266c834.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      "productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip%252FApple-iPod-touch-16GB%252F42608121%253Faffp1%253DfFOsamHCKgqF0m53bIwNt02vmvwu0qURUwQECzLrkAU%2526affilsrc%253Dapi",
      "standardShipRate": 0,
      "marketplace": false,
      "modelNumber": "MKH62LL/A",
      "productUrl": "http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FApple-iPod-touch-16GB%2F42608121%3Faffp1%3DfFOsamHCKgqF0m53bIwNt02vmvwu0qURUwQECzLrkAU%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
      "customerRating": "4.669",
      "numReviews": 146,
      "customerRatingImage": "http://i2.walmartimages.com/i/CustRating/4_7.gif",
      "isTwoDayShippingEligible": false,
      "availableOnline": false
    }
  ];
  var mockUpResponse = [
    {
      "itemId": 42608121,
      "parentItemId": 42608121,
      "name": "Apple iPod touch 16GB",
      "msrp": 193,
      "salePrice": 179,
      "upc": "888462350624",
      "categoryPath": "Electronics/Portable Audio/Apple iPods/iPod Touch",
      "shortDescription": "&lt;p&gt;Whether you're an avid gamer looking for a more powerful way to play, a music devotee seeking a better portable music experience, or a hobbyist photographer with an adventurous streak, the Apple 16 GB iPod touch packs a host of awesome features into a sleek package. A stunningly crisp 4-inch Retina display, a powerful A8 chip and M8 motion coprocessor make for a beautifully detailed, highly responsive gaming experience. Connect to Wi-Fi to FaceTime with friends and family, download music and games, send messages to your friends or post to social media. Capture the fun of impromptu gatherings with the iPod's 8-megapixel iSight camera with exposure control and improved HDR and face detection. And of course, the iPod touch is a sleek way to keep your music with you, and access the iTunes Store to grab your next favorite album. Attractive and designed to go with you everywhere, the iPod touch is available in 5 stunning colors to suit anyone's taste.&lt;/p&gt;",
      "longDescription": "&lt;b&gt;Apple iPod touch 16GB, Assorted Colors:&lt;/b&gt;&lt;div style=&quot;margin-left: 2em&quot;&gt;&lt;b&gt;Key Features:&lt;/b&gt;&lt;/div&gt;&lt;ul&gt;&lt;li&gt;4-inch Retina display&lt;/li&gt;&lt;li&gt;A8 with M8 motion coprocessor&lt;/li&gt;&lt;li&gt;8MP iSight &amp; FaceTime cameras&lt;/li&gt;&lt;li&gt;1080p HD video recording&lt;/li&gt;&lt;li&gt;802.11ac Wi-Fi &amp; Bluetooth 4.1&lt;/li&gt;&lt;li&gt;Up to 40 hours audio playback&lt;/li&gt;&lt;/ul&gt;&lt;div style=&quot;margin-left: 2em&quot;&gt;&lt;b&gt;Legal&lt;/b&gt;&lt;br&gt;iPod models are not available in all colors at all resellers.&lt;br&gt;Membership required. Requires initial sign-up. At the end of the trial period, the membership will automatically renew and payment method will be charged on a monthly basis until autorenewal is turned off in account settings.&lt;br&gt;FaceTime calling requires a FaceTime-enabled device with a Wi-Fi connection.&lt;br&gt; Display size is measured diagonally.&lt;br&gt;Rechargeable batteries have a limited number of charge cycles and may eventually need to be replaced. Battery life and number of charge cycles vary by use and settings. See www.apple.com/batteries for more information.&lt;br&gt;TM and (C) 2015 Apple Inc. All rights reserved.&lt;/div&gt;",
      "brandName": "Apple",
      "standardShipRate": 0,
      "color": "Gray",
      "marketplace": false,
      "shipToStore": true,
      "freeShipToStore": true,
      "modelNumber": "MKH62LL/A",
      "productUrl": "http://c.affil.walmart.com/t/api01?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FApple-iPod-touch-16GB%2F42608121%3Faffp1%3DfFOsamHCKgqF0m53bIwNt02vmvwu0qURUwQECzLrkAU%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
      "customerRating": "4.669",
      "numReviews": 146,
      "variants": [
        42608121,
        46088108,
        42608123,
        42608119,
        46088109
      ],
      "customerRatingImage": "http://i2.walmartimages.com/i/CustRating/4_7.gif"
    }
  ];
    var fakeModal = {
      result: {
        then: function(confirmCallback) {
          //Store the callbacks for later when the user clicks on the OK button of the dialog
          this.confirmCallBack = confirmCallback;
        }
      },
      close: function( item ) {
        //The user clicked OK on the modal dialog, call the stored confirm callback with the selected item
        this.result.confirmCallBack();
      }
    };

    beforeEach(module('app'));
    beforeEach(module('home'));

    beforeEach(inject(function($rootScope, $compile) {
      scope = $rootScope.$new();
      scope.products = mockupProducts;


      element = angular.element('<item-list item-list="products"></item-list>');
      element = $compile(element)(scope);

      $rootScope.$digest();

      directiveScope = element.isolateScope();


    }));
  
    describe('call getRecommendations function', function () {
      beforeEach(function(){
  
      });
      it("should call getRecommendations function", function() {
        directiveScope.getRecommendations(mockupProducts, '42608121');
      });
    }); 
    
  });
})();
