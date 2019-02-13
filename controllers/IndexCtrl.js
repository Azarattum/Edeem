app.controller("IndexCtrl", ["$scope", "$location", "Cart", ($scope, $location, Cart) => {
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

	$scope.getCartItems = () => {
		let count = 0;
		Cart.get().map(x => count += x.count);
		return count;
	};

	$scope.getCartPrice = () => {
		let price = 0;
		Cart.get().map(x => price += x.count * x.price);
		return price;
	};
}]);

app.filter("DishCount", function() {
	return function(input) {
		let output = input + " БЛЮД";

		let lastDigit = +input.toString()[input.toString().length - 1];
		if (+input.toString().slice(-2) > 10 && +input.toString().slice(-2) < 20)
			return output;

		switch(lastDigit)
		{
			case 1: output+="О"; break;
			case 2: output+="А"; break;
			case 3: output+="А"; break;
			case 4: output+="А"; break;
		}

		return output;
	}
});