(function () {
    "use strict";
    //home page controller
    angular.module('beer')
            .controller('BeerDetailController', BeerDetailController);

    BeerDetailController.$inject = ["beerDetails"];
    function BeerDetailController(beerDetails) {
        var $ctrl = this;
        $ctrl.beerDetails = beerDetails;
    }
})();