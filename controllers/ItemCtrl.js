app.controller("ItemCtrl", ["$scope", "$stateParams", "Menu", function($scope, $stateParams, Menu) {
	//Load content
	let id = $stateParams.id;
	$scope.dinner = Menu.loadCache().find(x => x.id == id);
	console.log($scope.dinner);
	
	//Scroll content up
	Menu.getAll(Math.ceil(id / 30)).then((res) => {
		$scope.dinner = res.data.find(x => x.id == id);
		
		setTimeout(() => {
			let height = Math.max(document.body.scrollHeight, document.body.offsetHeight, 
			document.documentElement.clientHeight, document.documentElement.scrollHeight,
			document.documentElement.offsetHeight) - window.innerHeight;
			let scrollStep = Math.ceil((height-window.scrollY) / (200 / 15));
			let	scrollInterval = setInterval(() => {
				if (window.scrollY < height) {
					window.scrollBy(0, scrollStep);
					console.log(window.scrollY);
				}
				else clearInterval(scrollInterval); 
			},15);
		}, 100);
	}).catch((res) => {
		console.log(res);
	});
	
	$scope.scrollToTop();
}])