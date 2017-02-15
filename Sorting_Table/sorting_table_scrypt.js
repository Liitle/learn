var oameni = [
			{name: "George", age:21, ocupation: "Student"},
			{name: "Petrica", age:43, ocupation: "Inginer"},
			{name: "Alex", age:32, ocupation: "Profesor"},
			{name: "Victoria", age:18, ocupation: "Studenta"},
			{name: "Sebastian", age:27, ocupation: "Antreprenor"},
			{name: "Ioan", age:65, ocupation: "Pensionar"}
			]


function table_creator(oameni){

	var table = document.getElementById("table");

	
	for(var i=0; i<oameni.length; i++){
		//debugger;
		var row = table.insertRow();

		for(var keys in oameni[i]){
			var cell = row.insertCell();
			cell.appendChild(document.createTextNode(oameni[i][keys]));
             
		}
	}
	document.body.appendChild(table);

}

document.getElementById("table").parentElement.removeChild(document.getElementById("table"));
oameni.sort(compare_name);
table_creator(oameni);

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

function blabla(){

	oameni.sort(compare_age)
}


