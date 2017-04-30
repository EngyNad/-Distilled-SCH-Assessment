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

        service.getbeerDetail = function (id) {
            return service.getRandomeBeer().then(function (response) {
               var testArray=[];
               testArray.push(response);
                var beerData = testArray.filter(function (item) {
                    return item.data.id === id;
                })[0];
                console.log(beerData);
                return beerData;
            });
        };

    }
    ;
}
)();
