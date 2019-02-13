app.controller("ItemCtrl", ["$scope", "$stateParams", "Menu", "Cart", function($scope, $stateParams, Menu, Cart) {
	//Load content
	let id = $stateParams.id;
	$scope.dinner = Menu.loadCache().find(x => x.id == id);
	$scope.order = Cart.add;
	console.log($scope.dinner);
	
	//Scroll content up
	Menu.getAll(Math.ceil(id / 30)).then((res) => {
		$scope.dinner = res.data.find(x => x.id == id);
	}).catch((res) => {
		console.log(res);
	});
	
	$scope.scrollToTop();
	document.body.onload = () => {
		setTimeout(() => {
		window.scrollBy(0, Number.MAX_SAFE_INTEGER);
		}, 5);
	};
}])