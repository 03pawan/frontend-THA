let btn = document.querySelector('button');
let list = document.querySelector('.list');
let todoList = document.querySelector('.todo')
let checkBox=[];
let newTodo=document.querySelector('.new-work');
let toDoNum=0;
let checked=[];

var toDo = [];

btn.addEventListener('click',()=>{
    console.log(newTodo.value);
    if(newTodo.value.trim()=="")
        return null;
    var newDiv={
        work: newTodo.value,
        check: false
    }
    newTodo.value="";
    toDo.push(newDiv);
    let div = document.createElement("input");
    div.type='text';
    div.classList.add('todo');
    div.value = toDo[toDoNum].work;
     list.appendChild(div);
    let div2 = document.createElement("input");
    div2.type='checkbox';
  
    div2.classList.add('check');
    div2.onclick=function(){checkboxClick(div2)};
    
   
    list.appendChild(div2);
   
    toDoNum++;
    checkBox = document.querySelectorAll('.check');
    checked = document.querySelectorAll('.check').checked = true;
    return;
});


checkBox.forEach((box=>{
    box.addEventListener('click',()=>{
        console.log("checked");
    })
}));

function checkboxClick(div2){
    if(div2.checked == 'false')
        console.log(div2);
    else
        console.log(div2+"HI");
}

