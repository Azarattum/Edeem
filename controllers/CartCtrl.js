app.controller("CartCtrl", ["$scope", "Cart", function($scope, Cart) {
	$scope.cart = Cart.get();
	if ($scope.cart.length <= 0)
		$scope.goTo("menu");
	$scope.add = Cart.add;
	$scope.remove = Cart.remove;

	$scope.submit = () => {
		document.getElementById("submit").click();
	};

	$scope.delete = (id) => {
		Cart.remove(id);
		$scope.cart = Cart.get();
		if ($scope.cart.length <= 0)
			$scope.goTo("menu");
	}
}])