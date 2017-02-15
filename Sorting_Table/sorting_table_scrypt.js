var oameni = [
			{name: "George", age:21, ocupation: "Student"},
			{name: "Petrica", age:43, ocupation: "Inginer"},
			{name: "Alex", age:32, ocupation: "Profesor"},
			{name: "Victoria", age:18, ocupation: "Studenta"},
			{name: "Sebastian", age:27, ocupation: "Antreprenor"},
			{name: "Ioan", age:65, ocupation: "Pensionar"}
			];


function table_creator(oameni){

	var table = document.createElement("table");
		table.id = "table1";
	var table_header = document.createElement("thead");
	var table_body = document.createElement("tbody");
    var header_row = table_header.insertRow();

    for(let k in oameni[0]){
	    var header_cell = header_row.insertCell();
            header_cell.appendChild(document.createTextNode( k[0].toUpperCase()+k.slice(1)));
            header_cell.onclick = function(){ table_sort(k);}

    }
	
	for(var i=0; i<oameni.length; i++){

		var row = table_body.insertRow();

		for(var keys in oameni[i]){
			var cell = row.insertCell();
			cell.appendChild(document.createTextNode(oameni[i][keys]));
             
		}
	}
	document.body.appendChild(table);
    table.appendChild(table_header);
    table.appendChild(table_body);

}


function table_sort(type){

    document.body.removeChild(document.getElementById("table1"));

    if(type == "name") {
        oameni.sort(compare_name);

    }
    else if(type == "age") {
        oameni.sort(compare_age);

    }
    else if(type == "ocupation") {
        oameni.sort(compare_ocupation);

    }
    table_creator(oameni);
}


function compare_name(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

function compare_age(a,b) {
  if (a.age < b.age)
    return -1;
  if (a.age > b.age)
    return 1;
  return 0;
}

function compare_ocupation(a,b) {
  if (a.ocupation < b.ocupation)
    return -1;
  if (a.ocupation > b.ocupation)
    return 1;
  return 0;
}

table_creator(oameni);


