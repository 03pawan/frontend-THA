let btn = document.querySelector('button');
let list = document.querySelector('.list');
let todoList = document.querySelector('.todo')

let newTodo=document.querySelector('.new-work');

btn.addEventListener('click',()=>{
    if(newTodo.value.trim()=="")
        return null;
    let div = document.createElement("input");
    div.type='text';
    div.classList.add('todo');
    div.value = newTodo.value;
     list.appendChild(div);
    let div2 = document.createElement("input");
    div2.type='checkbox';
    div2.classList.add('check');
    div2.onclick=function(){checkboxClick(div)};
    list.appendChild(div2);
    newTodo.value="";
    return;
});

function checkboxClick(div,div2){
    div.style.textDecoration='line-through' ;   
    setTimeout(()=>{
        list.remove(div,div2);
    },1000)
}

