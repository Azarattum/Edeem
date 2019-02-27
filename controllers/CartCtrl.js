app.controller("CartCtrl", ["$scope", "Cart", function($scope, Cart) {
	$scope.cart = Cart.get();
	$scope.add = Cart.add;
	$scope.remove = Cart.remove;

	$scope.submit = () => {
		document.getElementById("submit").click();
	};
}])