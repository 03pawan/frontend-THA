
function add(){
    x=document.getElementById('fnum').value;
    y=document.getElementById('snum').value;
    document.getElementById('val').innerHTML=parseFloat(x)+parseFloat(y);
}
function sub() {
    x = document.getElementById("fnum").value;
    y = document.getElementById("snum").value;
    document.getElementById("val").innerHTML = parseFloat(x) - parseFloat(y);
}

function mult() {
    x = document.getElementById("fnum").value;
    y = document.getElementById("snum").value;
    document.getElementById("val").innerHTML = parseFloat(x) * parseFloat(y);
}

function div() {
    x = document.getElementById("fnum").value;
    y = document.getElementById("snum").value;
    document.getElementById("val").innerHTML = parseFloat(x) / parseFloat(y);
}
function mod() {
    x = document.getElementById("fnum").value;
    y = document.getElementById("snum").value;
    document.getElementById("val").innerHTML = parseFloat(x) % parseFloat(y);
}
function reset() {
    document.getElementById("fform").reset();
}