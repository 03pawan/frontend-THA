// const calculator = document.querySelector('.calculator');
// const keys = calculator.querySelector('#calculator-keys');
// const display = document.querySelector('#input');
// let flag = 0;
// let previousKeyType, firstValue, secondValue, operator;

// keys.addEventListener('click', e => {

//     if (e) {
//         if (e.target.matches('button')) {
//             const key = e.target;
//             const action = key.id;
//             const keyContent = key.textContent;
//             const displayedNum = display.value;
//             // const previousKeyType=calculator.dataset.previousKeyType;
//             if (action === 'num') {
//                 if (displayedNum === '0' || previousKeyType === 'operator')
//                     display.value = keyContent;
//                 else
//                     display.value = displayedNum + keyContent;
//                 previousKeyType = 'num';
//             }
//             if (action === 'dec') {
//                 if (!displayedNum.includes('.')) 
//                     display.value = displayedNum + '.';
//                 previousKeyType = 'decimal';
//             }
//             if (action === 'op') {
                
                
//             }
//             if (action === 'equal') {
                
//             }
//             if(action === 'clear'){

//                 previousKeyType='clear';
//             }
//         }
//     }
// })

// const calculate = (n1, operator, n2) => {
//     let result = ''

//     if (operator === '+')
//         result = parseFloat(n1) + parseFloat(n2);
//     else if (operator === '-')
//         result = parseFloat(n1) - parseFloat(n2);
//     else if (operator === '*')
//         result = parseFloat(n1) * parseFloat(n2);
//     else if (operator === '/')
//         result = parseFloat(n1) / parseFloat(n2);
//     else if (operator === '%')
//         result = parseFloat(n1) % parseFloat(n2);
//     return result;
// }
// const display=document.querySelector('#input').value
// function calc(result){
//     display+=result;
// }

var eq='';
function dis(val)
{
    var op = document.getElementById("input").value;
    var ch = op.charAt(op.length-1);
    if(val=='-'||val=='+'||val=='*'||val=='÷')
    {
        if(ch=='-'||ch=='+'||ch=='*'||ch=='÷'||ch=='%')
            return;
    }
    if(val=='.')
    {
        if(!ch.includes('.'))
            if(ch=='.')
                return;
    }
    document.getElementById("input").value+=val;
}
  
function del() {
    var del = document.getElementById("input").value;
    document.getElementById("input").value=del.substring(0,del.length - 1);
}

//function that evaluates the digit and return result
function solve()
{
    eq=document.getElementById("input").value;
    eq=eq.replace(/×/g,'*');
    eq=eq.replace(/÷/g,'/');    
    let x = eq;
    let y = eval(x);
    document.getElementById("input").value = y;
    eq=y;
}
  
//function that clear the display
function clr()
{
    document.getElementById("input").value = "";
    eq='';
}