function add_to_cart(id) 
{
	let numberPizza = ("product_"+ id);
	
	let pizzaInCart = window.localStorage.getItem(numberPizza);
		pizzaInCart = pizzaInCart * 1 + 1;
	window.localStorage.setItem('product_' + id, pizzaInCart); //hash = key&value
}

function something() 
{
	let messageForUser = window.localStorage.getItem('message');
		 messageForUser = messageForUser*1 + 1;

		window.localStorage.setItem('message', messageForUser); //hash = key&value
		
			alert (messageForUser);
		}


