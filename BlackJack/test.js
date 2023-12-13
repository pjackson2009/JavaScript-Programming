// player draws 2 cards at the beginning.
// house draws 2 card, only one of them visible at the beginning
    // dealer is dealt 1 (face down), then player dealt 1, dealer 1 face up, then player 1
// player score up to 21, bust over.
// house score up to 21, bust over.
// if both 21, house wins.
// aces can be 1 or 10.
// picture cards are 10
// player draws first, then house. Always option of sticking.
// deck of card deplete after each one drawn.
// house can count cards.

// let deckOfCards = [
//     1, 1, 1, 1,
//     2, 2, 2, 2,
//     3, 3, 3, 3,
//     4, 4, 4, 4,
//     5, 5, 5, 5,
//     6, 6, 6, 6,
//     7, 7, 7, 7,
//     8, 8, 8, 8,
//     9, 9, 9, 9,
//     10, 10, 10, 10,
//     10, 10, 10, 10,
//     10, 10, 10, 10,
//     10, 10, 10, 10
// ]
// let playerCards = []
// let houseCards = []
// let cardSelection = 0
// let playerScore = 0
// let houseScore = 0
// let hiddenHouseCard = 0
// let playerHasBlackJack = false
// let playerBust = false

// function selectPlayerCard(){
//     cardSelection = Math.floor(Math.random() * deckOfCards.length)
//     cardDrawn = deckOfCards[cardSelection]
//     playerScore += cardDrawn
//     spliced = deckOfCards.splice(cardSelection, 1)
//     playerCards.push(cardDrawn)
// }

// function selectHouseCard(){
//     cardSelection = Math.floor(Math.random() * deckOfCards.length)
//     cardDrawn = deckOfCards[cardSelection]
//     houseScore += cardDrawn
//     spliced = deckOfCards.splice(cardSelection, 1)
//     houseCards.push(cardDrawn)
// }

// function startGame(){
//     selectHouseCard()
//     selectPlayerCard()
//     cardSelection = Math.floor(Math.random() * deckOfCards.length)
//     hiddenHouseCard = deckOfCards[cardSelection]
//     selectPlayerCard()
//     console.log("Player Score: " + playerScore)
//     console.log("House Score: " + houseScore)
//     console.log(hiddenHouseCard)
//     console.log("Player Cards: " + playerCards)
//     console.log("House Cards: " + houseCards)
// }
// startGame() 

// if (playerScore <= 20){
//     console.log("Do you want to draw another card?")
// } else if (playerScore === 21){
//     console.log("Woohoo, you got Blackjack!")
//     playerHasBlackJack = true
// } else {
//     console.log("You have gone bust!")
//     playerHasBlackJack = false
//     playerBust = true
// }