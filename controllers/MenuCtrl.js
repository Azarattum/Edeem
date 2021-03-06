app.controller("MenuCtrl", ["$scope", "Menu", "Cart", function($scope, Menu, Cart) {
	//Load content
	$scope.items = Menu.loadCache();
	$scope.order = Cart.add;
	$scope.inCart = (id) => {
		if (!Cart.exists(id))
			return 0;
		else
			return Cart.get(id).count;
	}

	Menu.getAll(1).then((res) => {
		$scope.items = res.data;
		console.log(res.data);
	}).catch((res) => {
		console.log(res);
	});
	
	$scope.select = (dinner) => {
		if (+dinner['is_no_stock']==1) return;
		$scope.goTo("item/" + dinner["id"]);
	};

	$scope.inFilters = (item) => {
		if ($scope.filters == undefined ||
			$scope.filters.length <= 0 ||
			$scope.filters.every(x => x.active == false))
			return true;

		return $scope.filters.some(x => x.active && x.id == item.category_id);
	}

	$scope.$watch("items", () => {
		$scope.filters = [];
		$scope.items.map((x) => {
			if (!$scope.filters.some(z => z["id"] == x["category_id"]))
			{
				$scope.filters.push({
					id: x["category_id"],
					title: x["category_title"],
					active: false
				});
			}
		});
		console.log($scope.filters);
	});	
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