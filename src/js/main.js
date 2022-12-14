//skapa lista med class
class Todo {
    constructor(todoList)
    {
        this.todoList = todoList;
    }
}

let todoList1 = new Todo ("köpa äpple");
let todoList2 = new Todo ("städa rummet");
let todoList3 = new Todo ("plugga JS");

let todoLists = [todoList1, todoList2, todoList3];


//börja loppa genom samt skapa li-tagg
for (let i = 0; i < todoLists.length; i ++){
    let ulTag = document.getElementById("todolist");
    let liTag = document.createElement("li");
    liTag.innerHTML =  todoLists[i].todoList;
    ulTag.appendChild(liTag);
    document.body.appendChild(ulTag);        
}

let todoListsText = JSON.stringify(todoLists);
localStorage.setItem("todoLists",todoListsText);


// skapa stäng-knapp för varje listor
let myList = document.getElementsByTagName("li");
 
for (let i = 0; i < myList.length; i ++){
  //skapa en element som innehåller en klass
    let span = document.createElement("span"); 
    let txt = document.createTextNode("\u00D7");

    span.className ="close";
    span.appendChild(txt);
      myList[i].appendChild(span); 
    }

// hämta klassen "close" från span ovan för att börjar loppar
let close = document.getElementsByClassName("close");

// loppar genom "close" och gömma listan genom klick
    for (let i = 0; i < close.length; i ++){
      close[i].onclick=function () {
        let div=this.parentElement;
        div.style.display="none";
      }
    }

//skapa en check knapp när man klickar på listor
let list = document.querySelector("ul");

    list.addEventListener('click', function (ev) {
    //om vi klickar på listan(LI) kommer det makeras som checked 
      if (ev.target.tagName === 'LI')
    {
      // skapa check knapp genom att använda toggle()
      ev.target.classList.toggle('check')
    }
    },false);

//kunna skapa händelser i input
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
      //använda insertBefore för att får nya händelser hamnar överst i listan
        list.insertBefore(li, list.children[0]);       
        li.appendChild(t);   
        document.getElementById("things").value = "";
      };

      let newListsText = JSON.stringify(things);
      localStorage.setItem("things",newListsText );

   //skapa en stäng-knapp för nya händelser 
   let span = document.createElement('span');
   let txt = document.createTextNode('\u00D7');
  
   span.className = 'close';
   span.appendChild(txt);
   li.appendChild(span);

   for (let i = 0;i < close.length; i++){
     close[i].onclick = function (){
       let div = this.parentElement;
       div.style.display = "none";
     }
    }
}




 

