(function () {
    "use strict";
    angular.module('beer')
            .service('BeersService', BeersService);
    BeersService.$inject = ['$http', 'ApiPath'];
    function BeersService($http, ApiPath) {
        var service = this;
        service.getRandomeBeer = function () {
            return $http.get(ApiPath + '/beer/random?key=b419591eb63fb87a60d059442c0082d4&hasLabels=Y&withBreweries=Y').then(function (response) {
                if (response.data.data.description) {
                    return response.data;
                } else {
                    return service.getRandomeBeer();
                }
            });
        };

        service.getBeerDetail = function (id) {
            return $http.get(ApiPath + '/beer/' + id + '?key=b419591eb63fb87a60d059442c0082d4').then(function (response) {
                return response.data;
            });
        };

        service.getBreweryBeers = function (id) {

            return $http.get(ApiPath + '/brewery/' + id + '/beers?key=b419591eb63fb87a60d059442c0082d4').then(function (response) {
                return response.data;
            });
        };

        service.getBreweySet = function () {


            return $http.get(ApiPath + '/breweries?key=b419591eb63fb87a60d059442c0082d4&established=2014').then(function (response) {
                return response.data;
            });
        };
    }
    ;
}
)();
