(function () {
    "use strict";

    angular.module('beer')
            .component('homeRandomeArea', {
                templateUrl: 'app/components/home/homeRandomeArea/homeRandomeArea.html',
                controller: HomeRandomeAreaController,
                bindings: {
                    randomeBeer: '='
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

    }
})();

