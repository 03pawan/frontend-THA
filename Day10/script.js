let cardContainer = document.querySelector('.card-container');
let numValue = [1, 2, 3, 4, 5, 6, 7, 8];
let moves = document.querySelector('span');
numValue = [...numValue, ...numValue];

for (i = 1; i <= 16; i++) {
    let div = document.createElement('div');
    div.classList.add('card');
    cardContainer.appendChild(div);
    let rand = Math.floor(Math.random() * (16 - i));
    div.innerHTML = "<h2>" + numValue[rand] + "<h2>";
    numValue.splice(rand, 1);
}
// cardContainer.innerHTML+= '<div class="card"> </div>'

let noOfMoves=0,correctMoves=0;
let firstCardFlip = false;
let firstCardValue;
let previousCard;
let cardSelector = document.querySelectorAll('.card');

cardSelector.forEach((card =>
    card.addEventListener('click', () => {    
        if (firstCardFlip == false) {
                card.classList.add('flipped');
                firstCardFlip = true;
                firstCardValue = card.innerHTML;
                previousCard=card;
            } else {
                noOfMoves++;
                card.classList.add('flipped');
                setTimeout(()=>{
                    if(previousCard==card)
                        return;
                     if (firstCardValue === card.innerHTML) {
                    // console.log("Matched");
                        previousCard.style.visibility='hidden';
                        card.style.visibility='hidden';
                        correctMoves++;
                }
                else{
                    previousCard.classList.remove("flipped");
                    card.classList.remove('flipped');
                    // console.log("Not matched");
                }
                },1500)
               
                firstCardFlip = false;
            }
            moves.innerHTML=noOfMoves;

    })))

setInterval(()=>{
    if(correctMoves===8){
        alert("Game Over, You Won!");
        window.location.href = window.location.href;
        correctMoves=0;
    }
},100);