app.controller("ItemCtrl", ["$scope", "$stateParams", "Menu", "Cart", function($scope, $stateParams, Menu, Cart) {
	//Load content
	let id = $stateParams.id;
	$scope.dinner = Menu.loadCache().find(x => x.id == id);
	$scope.order = Cart.add;
	
	Menu.getAll(Math.ceil(id / 30)).then((res) => {
		$scope.dinner = res.data.find(x => x.id == id);
	}).catch((res) => {
		console.log(res);
	});
	
	//Scroll page down on load
	angular.element(window.document.body).ready(() => {
		setTimeout(() => {
			window.scrollBy(0, Number.MAX_SAFE_INTEGER);
		}, 100);
	});
}])