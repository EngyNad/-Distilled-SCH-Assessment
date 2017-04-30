(function () {
    "use strict";
    //home page controller
    angular.module('beer')
            .controller('HomeController', HomeController);

    HomeController.$inject = ["randomeBeer"];
    function HomeController(randomeBeer) {
        var $ctrl = this;
        $ctrl.randomeBeer = randomeBeer;

    }
})();

