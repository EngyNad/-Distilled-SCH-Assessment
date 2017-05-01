(function () {
    "use strict";

    angular.module('beer')
            .component('homeRandomeArea', {
                templateUrl: 'app/components/home/homeRandomeArea/homeRandomeArea.html',
                controller: HomeRandomeAreaController,
                bindings: {
                    randomeBeer: '=',
                    breweryBeers: "=",
                    showSearchResult: "="
                }
            });
    HomeRandomeAreaController.$inject = ['BeersService'];
    function HomeRandomeAreaController(BeersService) {
        var $ctrl = this;

        $ctrl.getAnotherBeer = function () {
            var promise = BeersService.getRandomeBeer();
            promise.then(function (newRandomBeer) {
                $ctrl.randomeBeer = newRandomBeer;
            }, function () {
            });
        };

        $ctrl.getBreweryBeers = function () {

            BeersService.getBreweryBeers($ctrl.randomeBeer.data.breweries[0].id).then(function (response) {
                $ctrl.breweryBeers = response.data.filter(function (item) {
                    return item.description !== undefined;
                }).filter(function (item) {
                    return item.labels !== undefined;
                });

                $ctrl.showSearchResult = true;
            });


        };

    }
})();

