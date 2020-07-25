var ulList=document.getElementById('List');
console.log(ulList);
var input=document.getElementById('TodoItem');
var li,deleteBtn;
function addTodo(){


    if(input.value==""){
        alert('Enter something to Add');
    }else{

    
    // PASSING VALUE TO LIST

    Value=input.value;
    li=document.createElement('li');
    var liText=document.createTextNode(Value);
    li.appendChild(liText);
    ulList.appendChild(li);


    // CREATE EDIT BUTTON

    var editBtn=document.createElement('button');
    var editText=document.createTextNode('EDIT');
    editBtn.appendChild(editText);
    editBtn.setAttribute('class','smallBtn');
    editBtn.setAttribute('onclick','editTodo(this);');
    li.appendChild(editBtn);


    // CREATE DELETE BUTTON

    deleteBtn=document.createElement('button');
    var deleteText=document.createTextNode('DELETE');
    deleteBtn.appendChild(deleteText);
    deleteBtn.setAttribute('class','smallBtn');
    deleteBtn.setAttribute('onclick','deleteTodo(this);');
    li.appendChild(deleteBtn);
    
    }

    input.value="";
}

function editTodo(e){
 

    var beforeValue=e.parentNode.firstChild.nodeValue;
    if(beforeValue!=""){

    
    var editInput=document.createElement('input');
    editInput.setAttribute('class','input');
    editInput.value=beforeValue;
    e.parentNode.firstChild.nodeValue="";
    
    e.parentNode.insertBefore(editInput,e.parentNode.firstChild.nextSibling);
    

    // CREATE UPDATE BUTTON

    var updateBtn=document.createElement('button');
    var updateText=document.createTextNode("UPDATE");
    updateBtn.appendChild(updateText);
    updateBtn.setAttribute('class','smallBtn');
    updateBtn.setAttribute('onclick','updateTodo(this);');
    li.appendChild(updateBtn);





    li.replaceChild(updateBtn,deleteBtn);
    li.appendChild(deleteBtn);

    }
}

function deleteTodo(e){
    
    e.parentNode.remove();

}
    
function updateTodo(e){
    // console.log(updateValue);
    var updateValue=e.parentNode.childNodes[1].value;
    if(updateValue==""){
alert('Please enter value to Update');
    }else{

    
    e.parentNode.firstChild.nodeValue=updateValue;
    e.parentNode.childNodes[1].remove();
    e.remove();
    }

    
}