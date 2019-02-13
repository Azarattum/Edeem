/*
** http://test.interkot.ru/edim-server/api/dinners/get/all/1/CallBack
*/
app.factory("Menu", ["$http", ($http) => {
	let host = "http://test.interkot.ru/edim-server/api/";
	let cache = [];
	return {
		getAll: (page) => {
			let url = "dinners/get/all/" + page + "/JSON_CALLBACK";
			url = host + url;
			let result = $http.jsonp(url);
			
			result.then((res) => {
				cache = res.data;
			});
			
			return result;
		},
		loadCache: () => {
			return cache;
		}
	}
}]);