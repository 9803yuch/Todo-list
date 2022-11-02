//skapa lista med klass
class Todo {
    constructor(todoList)
    {
        this.todoList=todoList;
    }
}
let todoList1 = new Todo ("köpa äpple");
let todoList2 = new Todo ("städa rummet");
let todoList3 = new Todo ("plugga JS");

let todoLists = [todoList1, todoList2, todoList3];

//börja loppa genom listor samt skapa li taggen
for(let i = 0; i < todoLists.length; i ++){
    let ulTag= document.getElementById("todolist");
    let liTag = document.createElement("li");
    liTag.innerHTML =  todoLists[i].todoList + '<button class="closeButton"><i class="bi bi-trash3-fill"></i></button>';
    ulTag.appendChild(liTag);
    document.body.appendChild(ulTag);           
}
// få trash knappen att fungera
    let close = document.getElementsByClassName("closeButton")
    for (let i=0;i<close.length;i++){
        close[i].onclick=function () {
        let div=this.parentElement;
        div.style.display="none";
  }
}
