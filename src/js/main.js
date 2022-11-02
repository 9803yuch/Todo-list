//skapa lista med class
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

//börja loppa genom samt skapa li-tagg
for(let i = 0; i < todoLists.length; i ++){
    let ulTag= document.getElementById("todolist");
    let liTag = document.createElement("li");
    liTag.innerHTML =  todoLists[i].todoList;
    ulTag.appendChild(liTag);
    document.body.appendChild(ulTag);        
}

// skapa stäng-knapp för varje listor
let myList=document.getElementsByTagName("li")
 
for (let i = 0;i < myList.length; i ++){
    let span = document.createElement("span"); 
    let txt = document.createTextNode("\u00D7");

    span.className ="close";
    span.appendChild(txt);
      myList[i].appendChild(span); 
    }

let close=document.getElementsByClassName("close")
    for (let i = 0; i<  close.length; i ++){
      close[i].onclick=function () {
        let div=this.parentElement;
        div.style.display="none";
      }
    }

let list = document.querySelector("ul")
    console.log(list)
    list.addEventListener('click',function (ev) {
      if (ev.target.tagName === 'LI')
    {
      ev.target.classList.toggle('check')
    }
    },false);

//skapa händelser i input
function addElement(){
    let things = document.getElementById('things').value;
    let li = document.createElement('li');
    let t = document.createTextNode(things);
      if (things == '')
      {
        alert("Du måste fylla i nångonting");
      }
      else
      {
        list.appendChild(li);
        li.appendChild(t);
      }
    }
