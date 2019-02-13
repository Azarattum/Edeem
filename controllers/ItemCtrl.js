app.controller("ItemCtrl", ["$scope", "$stateParams", "Menu", function($scope, $stateParams, Menu) {
	//Load content
	let id = $stateParams.id;
	$scope.dinner = Menu.loadCache().find(x => x.id == id);
	console.log($scope.dinner);
	
	//Scroll content up
	Menu.getAll(Math.ceil(id / 30)).then((res) => {
		$scope.dinner = res.data.find(x => x.id == id);
		
		setTimeout(() => {
			window.scrollBy(0, Number.MAX_SAFE_INTEGER);
		}, 2);
	}).catch((res) => {
		console.log(res);
	});
	
	$scope.scrollToTop();
	document.body.onload = () => {
		setTimeout(() => {
		window.scrollBy(0, Number.MAX_SAFE_INTEGER);
		}, 2);
	};
}])