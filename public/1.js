function something() 
{
	let messageForUser = window.localStorage.getItem('message');
		 messageForUser = messageForUser*1 + 1;

		window.localStorage.setItem('message', messageForUser);
		
			alert (messageForUser);
}