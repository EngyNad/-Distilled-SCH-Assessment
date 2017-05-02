describe('The beerDetals', function() {
  'use strict';

  var beerDetailController;
  var beerDetails = {
        "message": "Request Successful",
        "data": {
            "id": "47xCEj",
            "name": "Bison American Wheat Ale",
            "nameDisplay": "Bison American Wheat Ale",
            "description": "This beer is a German Hefeweizen style of beer that is golden in color and is served unfiltered, which gives the beer a cloudy appearance. This brew is very light and has a mild yeast presence. Adding a squeeze of lemon or orange to this light bodied and light textured brew will bolster its characteristic tartness.\r\n\r\nGrain: 2 Row, Red Wheat\r\nHops: Sterling",
            "glasswareId": 5,
            "availableId": 1,
            "styleId": 112,
            "isOrganic": "N",
            "labels": {
                "icon": "https://s3.amazonaws.com/brewerydbapi/beer/47xCEj/upload_9HKYL0-icon.png",
                "medium": "https://s3.amazonaws.com/brewerydbapi/beer/47xCEj/upload_9HKYL0-medium.png",
                "large": "https://s3.amazonaws.com/brewerydbapi/beer/47xCEj/upload_9HKYL0-large.png"
            },
            "status": "verified",
            "statusDisplay": "Verified",
            "createDate": "2012-01-03 02:42:49",
            "updateDate": "2015-12-16 08:38:51",
            "glass": {
                "id": 5,
                "name": "Pint",
                "createDate": "2012-01-03 02:41:33"
            },
            "available": {
                "id": 1,
                "name": "Year Round",
                "description": "Available year round as a staple beer."
            },
            "style": {
                "id": 112,
                "categoryId": 11,
                "category": {
                    "id": 11,
                    "name": "Hybrid/mixed Beer",
                    "createDate": "2012-03-21 20:06:46"
                },
                "name": "Light American Wheat Ale or Lager with Yeast",
                "shortName": "Wheat Ale",
                "description": "This beer can be made using either ale or lager yeast. It can be brewed with 30 to 75 percent wheat malt, and hop rates may be low to medium. Hop characters may be light to moderate in bitterness, flavor and aroma. Fruity-estery aroma and flavor are typical but at low levels however, phenolic, clove-like characteristics should not be perceived. Color is usually straw to light amber, and the body should be light to medium in character. Diacetyl should not be perceived. Because this style is served with yeast the character should portray a full yeasty mouthfeel and appear hazy to very cloudy. Chill haze is also acceptable. Yeast flavor and aroma should be low to medium but not overpowering the balance and character of malt and hops. These beers are typically served with the yeast in the bottle, and are cloudy when served.",
                "ibuMin": "10",
                "ibuMax": "35",
                "abvMin": "3.5",
                "abvMax": "5.5",
                "srmMin": "4",
                "srmMax": "10",
                "ogMin": "1.036",
                "fgMin": "1.006",
                "fgMax": "1.018",
                "createDate": "2012-03-21 20:06:46",
                "updateDate": "2015-04-07 15:42:48"
            }
        },
        "status": "success"
    }
  /**
   * Gets called before each unit test it()
   */
  beforeEach(function() {
    // Load module
    module('beer');

    // Load any dependencies
    inject(function ($injector) {
      var $controller = $injector.get('$controller');
      var $log = $injector.get('$log');

      // Instantiate controller
      beerDetailController = $controller('BeerDetailController', {
        $log: $log,
        beerDetails: beerDetails
      });
    });
  });

  it('should initialize with beer details', function() {
    expect(beerDetailController).toBeDefined();
    expect(beerDetailController.beerDetails).toEqual(beerDetails);
  });



});
