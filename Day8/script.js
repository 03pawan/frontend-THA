const center=document.querySelector('.center-box');
let indexNum=[125, 145, 165, 185, 206, 227, 248,269, 106, 87, 68, 89, 110, 290, 91, 72, 93, 114, 135, 155, 175, 195,  214, 233, 252, 271, 254, 275, 296, 277, 298, 317, 315, 336, 85, 64, 43, 62, 42, 22, 23,  24];
for(let i=0;i<400;i++)
        center.innerHTML +='<div class="box" ></div>';
let box=document.querySelectorAll(".box");

box.forEach((item,index)=>{
    if(indexNum.includes(index))
        item.classList.toggle("colorChange");
})

box.forEach((item=>
    item.addEventListener('click', ()=>{
    item.classList.toggle('colorChange');
    // indexNum.push(index);
})))
// console.log(indexNum);
// const toggleColor = ()=> {

//      classList.toggle('colorChange');
//  }