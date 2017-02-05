function populate(judet_id, orase_id){

	var judet = document.getElementById(judet_id);
	var orase = document.getElementById(orase_id);

	orase.innerHTML = "";

	if(judet.value == "cluj"){

		var options = ["|","cluj-napoca|Cluj-Napoca","turda|Turda","gherla|Gherla","dej|Dej"];
	} 

	else if(judet.value == "sibiu"){

		var options = ["|","sibiu|Sibiu","medias|Medias","agnita|Agnita","cisnadie|Cisnadie"];
	} 

	else if(judet.value == "salaj"){

		var options = ["|","zalau|Zalau","simleul silvaniei|Simleul Silvaniei","jibou|Jibou"];
	} 
		
	for(var option in options){

		var pair = options[option].split("|");
		var new_option = document.createElement("option");
		new_option.value = pair[0];
		new_option.innerHTML = pair[1];
		orase.options.add(new_option)
	
		}
	

}