(function () {
    "use strict";
    angular.module('beer')
            .service('BeersService', BeersService);
    BeersService.$inject = ['$http'];
    function BeersService($http) {
        var service = this;
        service.getRandomeBeer = function () {
            return $http.get('assets/json/randome.json').then(function (response) {
                return response.data;
            });
        };

    };
}
)();
