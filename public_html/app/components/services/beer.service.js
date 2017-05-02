(function () {
    "use strict";
    angular.module('beer')
            .service('BeersService', BeersService);
    BeersService.$inject = ['$http', 'ApiPath'];
    function BeersService($http, ApiPath) {
        var service = this;
        service.getRandomeBeer = function () {
            return $http.get(ApiPath + '/beer/random?key=08c41ccd2af99540d8a8246c7cd65436&hasLabels=Y&withBreweries=Y').then(function (response) {
                if (response.data.data.description) {
                    return response.data;
                } else {
                    return service.getRandomeBeer();
                }
            });
        };

        service.getBeerDetail = function (id) {
            return $http.get(ApiPath + '/beer/' + id + '?key=08c41ccd2af99540d8a8246c7cd65436').then(function (response) {
                return response.data;
            });
        };

        service.getBreweryBeers = function (id) {

            return $http.get(ApiPath + '/brewery/' + id + '/beers?key=08c41ccd2af99540d8a8246c7cd65436').then(function (response) {
                return response.data;
            });
        };

        service.getBreweySet = function () {


            return $http.get(ApiPath + '/breweries?key=08c41ccd2af99540d8a8246c7cd65436&established=2014').then(function (response) {
                return response.data;
            });
        };
    }
    ;
}
)();
