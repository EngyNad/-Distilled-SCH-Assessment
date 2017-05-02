(function () {
    "use strict";

    angular.module('beer')
            .component('searchResult', {
                templateUrl: 'app/components/home/searchResult/searchResult.html',
                controller: SearchResultController,
                bindings: {
                   beer:"<"
                }
            });
   
    function SearchResultController() {
        var $ctrl = this;
     

    }
})();

