app.controller("MenuCtrl", ["$scope", "Menu", "Cart", function($scope, Menu, Cart) {
	//Load content
	$scope.dinners = Menu.loadCache();
	$scope.order = Cart.add;

	Menu.getAll(1).then((res) => {
		$scope.dinners = res.data;
		console.log(res.data);
	}).catch((res) => {
		console.log(res);
	});
	
	$scope.select = (dinner) => {
		if (+dinner['is_no_stock']==1) return;
		$scope.goTo("item/" + dinner["id"]);
	};
}])

app.filter("FoodCategory", function() {
	return function(input) {
		var output;

		switch(input)
		{
			case 20: output="🍕"; break;
			case 21: output="🥗"; break;
			case 23: output="🍲"; break;
			case 25: output="🍳"; break;
			case 26: output="🍨"; break;
		}

		return output;
	}
});