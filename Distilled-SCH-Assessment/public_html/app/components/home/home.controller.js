/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
  "use strict";
  //home page controller
  angular.module('beer')
          .controller('HomeController', HomeController);

HomeController.$inject=["randomeBeer"];
  function HomeController(randomeBeer) {
    var $ctrl = this;
    $ctrl.randomeBeer=randomeBeer;
    
  }
})();

