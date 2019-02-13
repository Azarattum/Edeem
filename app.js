var app = angular.module("edeem", ["ui.router"/*,"ngMockE2E"*/]);
document.addEventListener("touchstart", function(){}, true);

app.config(["$sceDelegateProvider", ($sceDelegateProvider) => {
	$sceDelegateProvider.resourceUrlWhitelist(["self", "http://test.interkot.ru/**"]);
}]);

app.config(["$stateProvider", "$urlRouterProvider", ($stateProvider, $urlRouterProvider) => {
	$urlRouterProvider.otherwise("/menu");
	$stateProvider
	.state("menu", {
		url: "/menu",
		views: {
			"content" : {
				templateUrl: "./views/menu.html",
				controller: "MenuCtrl"
			}
		}
	})
	.state("item", {
		url: "/item/:id",
		views: {
			"content" : {
				templateUrl: "views/item.html",
				controller: "ItemCtrl"
			}
		}
	})
	.state("cart", {
		url: "/cart",
		views: {
			"content" : {
				templateUrl: "views/cart.html",
				controller: "CartCtrl"
			}
		}
	});
}]);