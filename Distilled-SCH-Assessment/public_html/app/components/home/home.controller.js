(function () {
    "use strict";
    //home page controller
    angular.module('beer')
            .controller('HomeController', HomeController);

    HomeController.$inject = ["randomeBeer","breweryBeers"];
    function HomeController(randomeBeer,breweryBeers) {
        var $ctrl = this;
       $ctrl.sortOptions="name";
        $ctrl.randomeBeer = randomeBeer;
        $ctrl.showSearchResult=false;
      $ctrl.breweryBeers=breweryBeers.data.filter(function(item){
          return item.description !==undefined;
      }).filter(function(item){
          return item.labels !==undefined;
      });
          
    }
})();

