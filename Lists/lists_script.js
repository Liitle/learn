	
function transferToSecoundList() {

    var l1 = document.getElementById("list1");
    var l2 = document.getElementById("list2");
    var l1len = l1.length;
    var l2len = l2.length;
    
    for ( i=0; i<l1len ; i++){

        if (l1.options[i].selected == true ) {

            l2.options[l2len]= new Option(l1.options[i].text);
        }
    }

    for ( i = (l1len -1); i>=0; i--){

        if (l1.options[i].selected == true ) {

            l1.options[i] = null;
        }
    }
}

function transferToFirstList() {

    var l1 = document.getElementById("list1");
    var l2 = document.getElementById("list2");
    var l1len = l1.length;
    var l2len = l2.length;
    

    for ( i=0; i<l2len ; i++){

        if (l2.options[i].selected == true ) {
            
            l1.options[l1len]= new Option(l2.options[i].text);
        }
    }

    for ( i = (l2len -1); i>=0; i--){

        if (l2.options[i].selected == true ) {

            l2.options[i] = null;
        }
    }
}
