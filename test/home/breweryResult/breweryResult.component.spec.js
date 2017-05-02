describe('The brewery component', function () {
    'use strict';

    var breweryResultComponent;
    var brewery =
            {
                "message": "Request Successful",
                "data": {
                    "id": "4KqHpR",
                    "name": "Beer Engine",
                    "nameShortDisplay": "Beer Engine",
                    "description": "We're passionate about brewing great beer and enjoying new beers. Feel free to stop in and try one of our own brews or one of our many guest drafts. No bottles, No watered down brews, No comparsion.",
                    "website": "http://www.kybeerengine.com/",
                    "isOrganic": "N",
                    "images": {
                        "icon": "https://s3.amazonaws.com/brewerydbapi/brewery/4KqHpR/upload_fps6hR-icon.png",
                        "medium": "https://s3.amazonaws.com/brewerydbapi/brewery/4KqHpR/upload_fps6hR-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/brewery/4KqHpR/upload_fps6hR-large.png",
                        "squareMedium": "https://s3.amazonaws.com/brewerydbapi/brewery/4KqHpR/upload_fps6hR-squareMedium.png",
                        "squareLarge": "https://s3.amazonaws.com/brewerydbapi/brewery/4KqHpR/upload_fps6hR-squareLarge.png"
                    },
                    "status": "verified",
                    "statusDisplay": "Verified",
                    "createDate": "2012-01-03 02:41:45",
                    "updateDate": "2015-12-22 15:16:26"
                },
                "status": "success"
            };

    /**
     * Gets called before each unit test it()
     */
    beforeEach(function () {
        // Load module
        module('beer');

        // Load any dependencies
        inject(function ($injector) {
            var $componentController = $injector.get('$componentController');
            breweryResultComponent = $componentController('breweryResult', null, {
                brewery: brewery
            });

        });
    });

    it('should initialize with brewery', function () {
        expect(breweryResultComponent).toBeDefined();
        expect(breweryResultComponent.brewery).toEqual(brewery);
    });



});


