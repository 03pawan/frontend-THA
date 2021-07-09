let btn = document.querySelector('button');
let list = document.querySelector('.list');
let todoList = document.querySelector('.todo')
let newTodo = document.querySelector('.new-work');
let i = 1;

var todo=[];

btn.addEventListener('click', () => {
    if (newTodo.value.trim() == "")
        return null;
    let div = document.createElement("input");
    div.type = 'text';
    div.classList.add('todo');
    div.id = 'ide' + i;
    div.value = newTodo.value;
    list.appendChild(div);
    let div2 = document.createElement("input");
    div2.type = 'checkbox';
    div2.classList.add('check');
    div2.id = 'ide' + i;
    todo.push(0);
    div2.onclick = function () {
        checkboxClick(this.id)
    };
    list.appendChild(div2);
    newTodo.value = "";
     i++;
    return;
   
});

function checkboxClick(id) {  
    var checkID = id;
    checkID = checkID.charAt(checkID.length-1);  
    console.log(checkID);
    var item = document.querySelectorAll(`#${id}`);
    if(todo[checkID-1]==0){
        item[0].style.textDecoration = 'line-through';
        todo[checkID-1]=1;
    }
    else{
        item[0].style.textDecoration = 'none';
        todo[checkID-1]=0;
    }
}