'use strict';

angular.module('cart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'app/cart/cart.html',
    controller: 'CartController'
  });
}])

.controller('CartController',  function($scope, $location, totalAmountService) {
    $scope.products = [
	{name: "Mi Note", quantity: 1, price:100}
  ];
  
  $scope.totalAmount = 0;
	
	$scope.getTotal = function(){
    console.log("called 1");
    $scope.totalAmount = 0;
    var len = getLength($scope);
		if(  len > 0){
      var i = 0;
      debugger;
      console.log("called 2");
      for (i = 0; i < len ; i++) { 
        console.log("called 3");
        $scope.totalAmount +=  $scope.products[i].price * $scope.products[i].quantity ;
      }
    }
    return $scope.totalAmount;
  };
  
  $scope.addProduct = function(){
    if (angular.isDefined($scope.name) && angular.isDefined($scope.quantity)  && angular.isDefined($scope.price)  && $scope.name != '' && $scope.price != '' && $scope.quantity != '') 
    {
      console.log("Price: " + $scope.price + "\nQty: "+$scope.quantity);
        // ADD A NEW ELEMENT.
        $scope.products.push({ name: $scope.name, quantity:$scope.quantity, price: $scope.price });

        // CLEAR THE FIELDS.
        $scope.name = '';
        $scope.price = '';
        $scope.quantity = '';
    }
    console.log($scope.products.length);
  };


  $scope.removeSeletect = function(index){
    console.log("REcieved index: "+index);
    $scope.products.splice(index,1 );
  };


  $scope.routeToURL = function(path){
    console.log($scope.totalAmount);
    totalAmountService.amount = $scope.totalAmount;
    $location.path(path);
  };


});

function getLength($scope) {
  var len = $scope.products.length;
  return len;
}
 