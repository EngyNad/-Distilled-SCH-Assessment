(function (){
  "use strict";
  
   angular.module('beer')
          .component('homeRandomeArea', {
            templateUrl: 'app/components/home/homeRandomeArea/homeRandomeArea.html',
            controller: HomeRandomeAreaController,
            bindings: {
             randomeBeer:'='
            }
          });
          function HomeRandomeAreaController(){
            var $ctrl=this;
          console.log($ctrl.randomeBeer);
         
          }
  })();

