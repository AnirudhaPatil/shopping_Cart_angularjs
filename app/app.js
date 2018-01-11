'use strict';


angular.module('shoppingCart', [
    'ngRoute',
    'cart',
    'checkout' 
])


.service ('totalAmountService', [function(amount){
    var amount = amount;
    // return amount;
  }])

  
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/cart'
    });
}]);


 