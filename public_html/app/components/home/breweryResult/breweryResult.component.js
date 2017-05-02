(function () {
    "use strict";

    angular.module('beer')
            .component('breweryResult', {
                templateUrl: 'app/components/home/breweryResult/breweryResult.html',
                controller: BreweryResultController,
                bindings: {
                    brewery: "<"
                }
            });

    function BreweryResultController() {
        var $ctrl = this;


    }
})();

