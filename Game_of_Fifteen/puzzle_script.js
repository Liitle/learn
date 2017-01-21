
    function shuffle(array) {

        var tmp, current, top = array.length;
        
        top -= 1;

        while(top > 0) {

            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
            top -= 1;

        }
    

         
        return array;
    }

    function interChange(id){

        var temp;
        var cell = document.getElementById(id); 
        var left = document.getElementById(Number(id) - 1); 
        var right = document.getElementById(Number(id) + 1);
        var top = document.getElementById(Number(id) - 4);
        var bottom = document.getElementById(Number(id) + 4);

        if(left != undefined && left.firstChild.data == 0){
            temp = left.firstChild.data;
            left.firstChild.data = cell.firstChild.data;
            cell.firstChild.data = temp;
        }


        else if(right != undefined && right.firstChild.data == 0){
            temp = right.firstChild.data;
            right.firstChild.data = cell.firstChild.data;
            cell.firstChild.data = temp;
        }

        else if(top != undefined && top.firstChild.data == 0){
            temp = top.firstChild.data;
            top.firstChild.data = cell.firstChild.data;
            cell.firstChild.data = temp;
        }

        else if(bottom != undefined && bottom.firstChild.data == 0){
           temp = bottom.firstChild.data;
            bottom.firstChild.data = cell.firstChild.data;
            cell.firstChild.data = temp;
        }      
    }

    function puzzleGame(){       
        
        for(let i=0; i<16; i++){
            var cell = document.getElementById(i);
            cell.onclick = function(){ interChange(i);
            }  
            
        }

    }

    function tableCreate(){
    
        var body = document.body,
            tbl  = document.createElement('table');
        tbl.id = 'table';

        var cell_values = shuffle([0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        var c = 0;

        for(var i = 0; i < 4; i++){

            var tr = tbl.insertRow();

            for(var j = 0; j < 4; j++){

                var td = tr.insertCell();           
                td.appendChild(document.createTextNode(cell_values[c]));
                td.id =  c;
                td.className = "cell";
                c += 1              
            
            }
        }
    body.appendChild(tbl);
    }


tableCreate();
puzzleGame();


