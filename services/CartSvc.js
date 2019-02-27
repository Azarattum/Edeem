/*
** Cart service for the shop
*/
app.factory("Cart", [() => {
	let cart = [];

	let exists = (id) => {
		//Check if there is any item with provided id
		return cart.some(x => x.id == id);
	};

	let add = (item, count = 1) => {
		//Add new item
		if (!exists(item.id))
		{
			item.count = count;
			cart.push(item);
		}
		//Increase existing item
		else
			cart.find(x => x.id == item.id).count += count;
	};

	let remove = (id, count = -1) => {
		cart = cart.filter(x => {
			//Find item by id
			if (x.id == id)
			{
				//Decrease count of the item
				if (count == -1)
					return false;
					
				x.count -= count;
				if (x.count <= 0)
					return false;
			}
			return true;
		});
	};

	let get = (id) => {
		//Returns the cart
		if (id == undefined)
			return cart;
		else
			return cart.find(x => x.id == id);
	};

	return {
		exists: exists,
		add: add,
		remove: remove,
		get: get
	}
}]);