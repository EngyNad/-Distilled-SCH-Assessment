xdescribe('the beer service', function () {
    "use strict";

    var $httpBackend;
    var beersService;
    var ApiPath;
   

    // Sample data to mock http requests
    var testData = {
        brewery: {
            "message": "Request Successful",
            "data": {
                "id": "vBo3rk",
                "name": "Mehana Volcano Red Ale",
                "nameDisplay": "Mehana Volcano Red Ale",
                "description": "Volcano Red Ale is a fuller-bodied ale brewed in the tradition of American amber ales. The reddish color and slight malt flavor are achieved by using special malts. An elegant beer, named in tribute to the active volcanoes found on the island.",
                "abv": "5.2",
                "ibu": "23",
                "glasswareId": 5,
                "availableId": 1,
                "styleId": 32,
                "isOrganic": "N",
                "labels": {
                    "icon": "https://s3.amazonaws.com/brewerydbapi/beer/vBo3rk/upload_HfNDwm-icon.png",
                    "medium": "https://s3.amazonaws.com/brewerydbapi/beer/vBo3rk/upload_HfNDwm-medium.png",
                    "large": "https://s3.amazonaws.com/brewerydbapi/beer/vBo3rk/upload_HfNDwm-large.png"
                },
                "status": "verified",
                "statusDisplay": "Verified",
                "foodPairings": "Goes well with chicken, veal and barbecued dishes.",
                "originalGravity": "1.048",
                "createDate": "2012-01-03 02:43:41",
                "updateDate": "2015-12-15 23:10:09",
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
                    "id": 32,
                    "categoryId": 3,
                    "category": {
                        "id": 3,
                        "name": "North American Origin Ales",
                        "createDate": "2012-03-21 20:06:45"
                    },
                    "name": "American-Style Amber/Red Ale",
                    "shortName": "Amber",
                    "description": "American amber/red ales range from light copper to light brown in color. They are characterized by American-variety hops used to produce the perception of medium hop bitterness, flavor, and medium aroma. Amber ales have medium-high to high maltiness with medium to low caramel character. They should have medium to medium-high body. The style may have low levels of fruityester flavor and aroma. Diacetyl can be either absent or barely perceived at very low levels. Chill haze is allowable at cold temperatures. Slight yeast haze is acceptable for bottle-conditioned products.",
                    "ibuMin": "30",
                    "ibuMax": "40",
                    "abvMin": "4.5",
                    "abvMax": "6",
                    "srmMin": "11",
                    "srmMax": "18",
                    "ogMin": "1.048",
                    "fgMin": "1.012",
                    "fgMax": "1.018",
                    "createDate": "2012-03-21 20:06:45",
                    "updateDate": "2015-04-07 15:26:52"
                },
                "breweries": [
                    {
                        "id": "NcvyGD",
                        "name": "Hawai'i Nui Brewing",
                        "nameShortDisplay": "Hawai'i Nui",
                        "description": "At Hawai‘i Nui Brewing, we’re passionate about craft beer. We brew small batches of our all-natural ales and lagers from the finest barley malt, wheat, hops and yeast.  We are committed to local production in Hawai‘i.  \r\n\r\nOur uniquely well balanced Island Style beer is perfect for your time in Paradise!\r\n\r\nWhat is Island Style? To those of us who call Hawai’i home, it’s all about balance. Working hard, sure. But when pau hana time comes, it’s about friends and family. Heeding the call of the sun and sand, surf and sea. Tasting freshness. Celebrating music. Stopping at sunset. Resting easy at night. Appreciating life’s detours–what we call holo holo time. Living life as it should be.",
                        "website": "http://www.hawaiinuibrewing.com/",
                        "established": "2007",
                        "isOrganic": "N",
                        "images": {
                            "icon": "https://s3.amazonaws.com/brewerydbapi/brewery/NcvyGD/upload_uoBQU9-icon.png",
                            "medium": "https://s3.amazonaws.com/brewerydbapi/brewery/NcvyGD/upload_uoBQU9-medium.png",
                            "large": "https://s3.amazonaws.com/brewerydbapi/brewery/NcvyGD/upload_uoBQU9-large.png",
                            "squareMedium": "https://s3.amazonaws.com/brewerydbapi/brewery/NcvyGD/upload_uoBQU9-squareMedium.png",
                            "squareLarge": "https://s3.amazonaws.com/brewerydbapi/brewery/NcvyGD/upload_uoBQU9-squareLarge.png"
                        },
                        "status": "verified",
                        "statusDisplay": "Verified",
                        "createDate": "2012-01-03 02:41:57",
                        "updateDate": "2015-12-22 15:13:13",
                        "locations": [
                            {
                                "id": "a57dkm",
                                "name": "Main Brewery",
                                "streetAddress": "275 E. Kawili St",
                                "locality": "Hilo",
                                "region": "Hawaii",
                                "postalCode": "96720",
                                "phone": "808-934-8211",
                                "website": "http://www.hawaiinuibrewing.com/",
                                "latitude": 19.7059868,
                                "longitude": -155.0691282,
                                "isPrimary": "Y",
                                "inPlanning": "N",
                                "isClosed": "N",
                                "openToPublic": "Y",
                                "locationType": "micro",
                                "locationTypeDisplay": "Micro Brewery",
                                "countryIsoCode": "US",
                                "status": "verified",
                                "statusDisplay": "Verified",
                                "createDate": "2012-01-03 02:41:57",
                                "updateDate": "2014-07-23 19:11:34",
                                "country": {
                                    "isoCode": "US",
                                    "name": "UNITED STATES",
                                    "displayName": "United States",
                                    "isoThree": "USA",
                                    "numberCode": 840,
                                    "createDate": "2012-01-03 02:41:33"
                                }
                            }
                        ]
                    }
                ]
            },
            "status": "success"
        }
    };

    beforeEach(function () {
        // Load module
        module('beer');

        // Load any dependencies
        inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
            beersService = $injector.get('BeersService');
            ApiPath = $injector.get('ApiPath');
        });
    });

    it('should retrieve an array of Brewery', function () {
        $httpBackend.expectGET(ApiPath + '/breweries?key=b419591eb63fb87a60d059442c0082d4&established=2014').respond(testData.brewery);
        beersService.getBreweySet().then(function (brewery) {
            expect(brewery).toEqual(testData.brewery);
        });
        $httpBackend.flush();
    });
});


