let firstCard = Math.ceil(Math.random() * 11)
let secondCard = Math.ceil(Math.random() * 11)
let playerCards = [firstCard, secondCard]
let sum = firstCard + secondCard
let cards = firstCard + ", " + secondCard
let hasBlackJack = false
let isAlive = true
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")

function updateMessage(){
    if (sum <= 20){
        message = "Do you want to stick or twist?"
    } else if (sum === 21){
        message = "Congrats! You've got BlackJack!"
        hasBlackJack = true
    } else{
        message = "You've gone bust!"
        isAlive = false
    }
    messageEl.textContent = message
}

function resetVariables(){
    firstCard = Math.ceil(Math.random() * 11)
    secondCard = Math.ceil(Math.random() * 11)
    sum = playerCards[0] + playerCards[1]
    cards = playerCards[0] + ", " + playerCards[1]
    hasBlackJack = false
    isAlive = true
}

function startGame(){
    resetVariables()
    cardsEl.textContent = "Cards: " + cards
    sumEl.textContent = "Sum: " + sum
    updateMessage()
}

function twist(){
    newCard = Math.ceil(Math.random() * 11)
    sum += newCard
    cards += ", " + newCard
    cardsEl.textContent = "Cards: " + cards
    sumEl.textContent = "Sum: " + sum
    updateMessage()
}
console.log(cards)

console.log(playerCards)
console.log(playerCards)