let firstCard =  document.getElementById('firstCard')
let secondCard = document.getElementById('secondCard')
let thirdCard = document.getElementById('thirdCard')
let result = document.querySelector('#message-el')
let sum = document.getElementById('sum')
let message = ''
let newCard = document.querySelector('.link')
// let priceMoney = document.querySelector('amount')

cardOne = getRandomNumbers()
cardTwo = getRandomNumbers()

let allCards = [cardOne , cardTwo ]

total = cardOne + cardTwo

function startGame(){

    firstCard.textContent += cardOne
    secondCard.textContent += cardTwo
    sum.textContent = "Sum:" + total

    if (total < 21){
        newCard.style.display = 'block'
        newCard.setAttribute('onclick', 'newCardFcn()')
        

    }
    else if ( total === 21){
        message = "You've won the game"

    }
    else{
        message = "LOST!!! LOST!! LOST!!!"
    }
    result.textContent = message
    // newGame = true;
    // return newGame
}


function newCardFcn(){
    var cardThree 
    cardThree = getRandomNumbers()
    total += cardThree
    thirdCard.textContent += cardThree
    sum.textContent = "Sum:" + total
    console.log (cardThree,total)
    allCards.push(cardThree)
    
    total > 21|| total < 21 ? message = "Finally youv've lost" :  message = 'Omo you later win sha';
    result.textContent += message
    console.log(allCards)
    // newGame = true
    // runNewGame()

}
//   GET RANDOM NUMBER
function getRandomNumbers(){
   let randonNum = Math.floor(Math.random() * 13) + 1;
   if (randonNum > 11){
        return 10
   }
   else if (randonNum === 1){
    return 11
   }
   else {
    return randonNum
   }
}

// console.log(newGame)

//     if (newGame = true){
//         cardOne = 0;
//         cardTwo = 0;
//         cardThree = 0;
//         firstCard.textContent += '';
//         secondCard.textContent += '';
//         thirdCard.textContent += '';
// }

