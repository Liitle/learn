
function dataValidation(date, format){

	var date_formats = 
	{	'zz/ll/aaaa':/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(\d{4})$/,
		'll/zz/aaaa':/^(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/,
		'zz/ll/aa':/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(\d{2})$/,
	}; 	 
	 
	for(var key in date_formats){
	 	
	 	if(key == format){

	 		if(date_formats[format].test(date)){
	 			console.log('The date is valid'); 
	 		}
	 		else{
	 			console.log('The date is invalid')
	 		}
	 	}
	}	  
} 

// tests

console.log("'02/09/2016','zz/ll/aaaa'"); dataValidation('02/09/2016','zz/ll/aaaa');
console.log("'13/10/1999','zz/ll/aaaa'"); dataValidation('13/10/1999','zz/ll/aaaa');
console.log("'31/09/999','zz/ll/aaaa'"); dataValidation('31/09/999','zz/ll/aaaa');
console.log("'28/09/99','zz/ll/aa'"); dataValidation('28/09/99','zz/ll/aa');
console.log("'31/28/99','zz/ll/aa'"); dataValidation('31/28/99','zz/ll/aa');
console.log("'03/31/2000','ll/zz/aaaa'"); dataValidation('03/31/2000','ll/zz/aaaa');
console.log("'31/09/2000','ll/zz/aaaa'"); dataValidation('31/09/2000','ll/zz/aaaa');