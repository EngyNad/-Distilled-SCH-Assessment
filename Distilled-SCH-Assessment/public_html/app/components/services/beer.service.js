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

        service.getbeerDetail = function (id) {
            return $http.get(ApiPath + '/beer/' + id + '?key=b419591eb63fb87a60d059442c0082d4').then(function (response) {
                return response.data;
            });
        };

        service.getBreweryBeers = function (id){
            return $http.get(ApiPath + '/brewery/' + id + '/beers?key=b419591eb63fb87a60d059442c0082d4').then(function (response) {
                return response.data;
            });
        };
//        var ids = function () {
//            console.log('starting');
//            var ids = [];
//            for (var i = 0; i < 25; i++) {
//                $http.get(ApiPath + '/beer/random?key=08c41ccd2af99540d8a8246c7cd65436&hasLabels=Y').then(function (response) {
//                    ids.push(response.data.data.id);
//                    window.localStorage.ids = JSON.stringify(ids);
//                });
//                if(ids.length === 25){
//                    console.log(ids);
//                    window.localStorage.ids = JSON.stringify(ids);
//                    console.log(window.localStorage.ids);
//                }
//            }
//        };

    }
    ;
}
)();
