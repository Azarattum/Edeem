app.controller("IndexCtrl", ["$scope", "$location", ($scope, $location) => {
	//Setup scrolling
	window.addEventListener("scroll", (e) => {
		let logo = document.getElementsByClassName("logo")[0];
		let scrollY = window.pageYOffset || document.documentElement.scrollTop;
		let logoY = logo.offsetHeight + logo.offsetTop;
		
		if (scrollY >= logoY)
			logo.classList.add("minimized");
		else
			logo.classList.remove("minimized");
		
		let body = document.body;
		let html = document.documentElement;
		let over = document.getElementsByClassName("over")[0];
		let overShadow = document.getElementsByClassName("shadow")[0];
		let height = Math.max( body.scrollHeight, body.offsetHeight, 
            html.clientHeight, html.scrollHeight, html.offsetHeight);
		
		let clipDown = scrollY / height * 120;
		let clipAngle = -scrollY / height * 90;
		let clipPath = "polygon(100% " + (0 + clipDown) + "%, 100% 100%, 0% 100%, 0% " + (40 + clipDown + clipAngle) + "%)";
		over.style.clipPath = clipPath;
		overShadow.style.clipPath = clipPath;
	});
	
	//Register scroll to top function
	$scope.scrollToTop = (scrollDuration) => {
		let scrollStep = -window.scrollY / (scrollDuration / 15);
		let	scrollInterval = setInterval(() => {
			if (window.scrollY != 0) {
				window.scrollBy(0, scrollStep);
			}
			else clearInterval(scrollInterval); 
		},15);
	};
	
	//Register go to function
	$scope.goTo = (page, cancel) => {
		if (cancel) return;
		$location.path(page, false);
	};
}]);