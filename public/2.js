function add_to_cart(id) 
{
	let numberPizza = ("product_"+ id);

	let pizzaInCart = window.localStorage.getItem(numberPizza);
		pizzaInCart = pizzaInCart * 1 + 1;
	window.localStorage.setItem('product_' + id, pizzaInCart); //hash = key&value
	
	//вывод кол-ва пицц в корзине
	alert ("Pizza in you cart " + total_pizza_in_cart());

}

function total_pizza_in_cart() 
{
	let cnt = 0;
		for (var i = 0; i < window.localStorage.length; i++) 
		{
			let keyNumberPizza = window.localStorage.key(i);//получаем ключ пиццы
			let amountPizza = window.localStorage.getItem(keyNumberPizza); //получаем значение (hh[key]=x)
			if (keyNumberPizza.indexOf('prod') == 0) 
			{
				cnt = amountPizza * 1 + cnt;
			}
		}
	return cnt;
}

function something() 
{
	let messageForUser = window.localStorage.getItem('message');
		 messageForUser = messageForUser*1 + 1;

		window.localStorage.setItem('message', messageForUser); //hash = key&value
		
			alert (messageForUser);
}



