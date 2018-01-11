'use strict';

angular.module('checkout', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/checkout', {
    templateUrl: 'app/checkout/checkout.html',
    controller: 'CheckoutController'
  });
}])


.controller('CheckoutController', ['$scope', 'totalAmountService',function($scope, totalAmountService) {
 
  $scope.getTotalCheckoutAmt = function(){
    console.log("Total Amount in CHeckout: "+totalAmountService.amount);
    return totalAmountService.amount;
  };




}]);
 