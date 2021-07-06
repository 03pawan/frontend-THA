let cardContainer = document.querySelector('.card-container');
let numValue = [1, 2, 3, 4, 5, 6, 7, 8];
let moves = document.querySelector('span');
numValue = [...numValue, ...numValue];
let flag=0;

for (i = 1; i <= 16; i++) {
    let div = document.createElement('div');
    div.classList.add('card');
    cardContainer.appendChild(div);
    let rand = Math.floor(Math.random() * (16-i ));
    div.innerHTML = "<h2>" + numValue[rand] + "<h2>";
    numValue.splice(rand, 1);
}

let noOfMoves=0,correctMoves=0;
let firstCardFlip = false,gamePause=false;
let firstCardValue;
let previousCard;
let cardSelector = document.querySelectorAll('.card');



    cardSelector.forEach((card =>
    card.addEventListener('click', () => {  
        if(flag==0){
            if (firstCardFlip == false) {
                card.classList.add('flipped');
                firstCardFlip = true;
                firstCardValue = card.innerHTML;
                previousCard=card;
                
            } else {
                // gamePause=true;
                flag=1;
                noOfMoves++;
                card.classList.add('flipped');
                setTimeout(()=>{
                    if(previousCard==card)
                        return;
                     if (firstCardValue === card.innerHTML) {
                        previousCard.style.visibility='hidden';
                        card.style.visibility='hidden';
                        correctMoves++;
                }
                else{
                    previousCard.classList.remove("flipped");
                    card.classList.remove('flipped');
                }
                flag=0;
                    },1500)
                firstCardFlip = false;
                
            }
            moves.innerHTML=noOfMoves;

        }
        else
            return;
        
    }
    )))


setInterval(()=>{
    if(correctMoves===8){
        alert("Game Over, You Won!");
        window.location.href = window.location.href;
        correctMoves=0;
    }
},100);