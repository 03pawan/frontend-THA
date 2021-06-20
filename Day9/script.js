let containerBox= document.querySelector('.big-box');

for(let i=0;i<36;i++)
    containerBox.innerHTML+='<div class="box"> </div>';

let noOfSeats=36;   
    
let box=document.querySelectorAll(".box");
let text=document.querySelectorAll(".text");

box.forEach((item=> 
    item.addEventListener('click',()=>{
    if(item.classList.contains("selected")){
        item.classList.remove("selected");
        noOfSeats+=1;
    }
    else{
        item.classList.add("selected");
        noOfSeats-=1;
    }
    text[0].value= 36-noOfSeats;
    text[1].value= noOfSeats;
})))