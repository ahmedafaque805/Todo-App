
//todo

var list = document.getElementById("list");

function addtodo(){
    var todo_item = document.getElementById("todo-item");
 
    // create li tag  
    var li = document.createElement('li')
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)
    li.setAttribute("class","li")

    // create delete button
    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("DELETE")
    delbtn.setAttribute("class","btn btn-outline-light")
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.appendChild(deltext)

 
    // create edit button
    var editbtn = document.createElement("button");
    var edittext = document.createTextNode("EDIT")
    editbtn.appendChild(edittext)
    editbtn.setAttribute("class", "btn btn-outline-light")
    editbtn.setAttribute("onclick","editItem(this)")

    li.appendChild(delbtn)
    li.appendChild(editbtn)

    list.appendChild(li)
    todo_item.value = ""
}
 
function deleteItem(e){

    e.parentNode.remove()
    
}
 
// delete all todos
function deleteall(){
    list.innerHTML = ""
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editvalue = prompt("Enter edit value",val)
    e.parentNode.firstChild.nodeValue = editvalue
    
}