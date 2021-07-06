const container = document.querySelector('.container');
const input = document.querySelector('input');
const btn = document.querySelector('button');



btn.addEventListener('click', () => {

    let search = input.value;
    if (/\s/.test(search) || search==NULL){
        input.value="";
        return;
    }
    else{
    fetch(`https://api.github.com/users/${search}`)
        .then(res => res.json())
    .then(data => {
        displayDetails(data);
        // console.log(data);
    })}
    input.value="";
})

function displayDetails(data){
    let div=document.createElement('div');
    div.innerHTML='<br>'+ "Name: "+data.name+'<br>'+"Username: "+data.login+'<br>'+"Followers: "+data.followers+'<br>'+"Following: "+data.following+'<br>' +`<a href="${data.html_url}" target="_blank" rel="noopener noreferrer"> Check Profile here</a>`;
    container.append(div);
}