let btn = document.querySelector('button');
let list = document.querySelector('.list');
let todoList = document.querySelector('.todo')

let newTodo=document.querySelector('.new-work');
let toDoNum=0;

var toDo = [
    // {
    // work: "THA 10",
    // check: false  
    // },
    // {
    //     work: "THA 11",
    //     check: false
    // },
    // {
    //     work: "THA 12",
    //     check: false
    // }
]

// toDo.forEach((item=>{
//     let div = document.createElement("input");
//     div.type='text';
//     div.classList.add('todo');
//     div.value = item.work;
//     let div2 = document.createElement("input");
//     div2.type='checkbox';
//     div2.classList.add('check');
//     list.appendChild(div);
//     list.appendChild(div2);
// }))




btn.addEventListener('click',()=>{
    console.log(newTodo.value);
    if(newTodo.value=="")
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
    let div2 = document.createElement("input");
    div2.type='checkbox';
    div2.classList.add('check');
    list.appendChild(div);
    list.appendChild(div2);
    // list.innerHTML += '<input type="text" class="todo" id="ip- '+toDoNum+'" value="'+newTodo.value+'"><input type="checkbox" name="" class="check" id="ip-'+toDoNum+'"><br>'
    toDoNum++;
})

// let updatedList = document.querySelector('.list');
// let checkBox = document.querySelectorAll('.check');
let checkBox = document.querySelectorAll('.check');
checkBox.forEach((box,index)=>
    box.addEventListener('click',()=>{
            // box.checked=true;
            // toDo[index].check=true;
            // let toHide=document.querySelectorAll(' .todo');
            // console.log(toHide[index]);
            // toHide.styles.display = "hidden";       
        if(box.checked===true)
            console.log("hello");

    }))