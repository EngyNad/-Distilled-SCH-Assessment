(function () {
    "use strict";
    //home page controller
    angular.module('beer')
            .controller('HomeController', HomeController);

    HomeController.$inject = ["randomeBeer", "breweryBeers", "brewerySet"];
    function HomeController(randomeBeer, breweryBeers, brewerySet) {
        var $ctrl = this;
        $ctrl.sortOptions = "name";
        $ctrl.searchType = "beer";
        $ctrl.randomeBeer = randomeBeer;
        $ctrl.showSearchResult = false;
        
        $ctrl.brewerySet = brewerySet.data.filter(function (item) {
            return item.description !== undefined;
        }).filter(function (item) {
            return item.images !== undefined;
        });;

        $ctrl.breweryBeers = breweryBeers.data.filter(function (item) {
            return item.description !== undefined;
        }).filter(function (item) {
            return item.labels !== undefined;
        });

    }
})();

