app.controller("CartCtrl", ["$scope", "Cart", function($scope, Cart) {
	$scope.cart = Cart.get();
}])