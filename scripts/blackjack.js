document.addEventListener("DOMContentLoaded", function () {
    //to solve the problem where the JavaScript is being executed before the DOM is fully loade, added this line - wraps the entire content of the blackjack.js file inside the DOMContentLoaded event listener. This ensures the script runs only after the entire document content has been loaded.
  
    const dealerCardsEl = document.getElementById("dealer-cards");
    const playerCardsEl = document.getElementById("player-cards");
    const dealButton = document.getElementById("deal");
    const hitButton = document.getElementById("hit");
    const standButton = document.getElementById("stand");
    const messageEl = document.getElementById("message");
  
    let dealerCards = [];
    let playerCards = [];
  
    const deck = [
      { value: 2, name: "2" },
      { value: 3, name: "3" },
      { value: 4, name: "4" },
      { value: 5, name: "5" },
      { value: 6, name: "6" },
      { value: 7, name: "7" },
      { value: 8, name: "8" },
      { value: 9, name: "9" },
      { value: 10, name: "10" },
      { value: 10, name: "J" },
      { value: 10, name: "Q" },
      { value: 10, name: "K" },
      { value: 11, name: "A" },
    ];
  
    function shuffleDeck(deck) {
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      return deck;
    }
  
    function dealCard(deck, hand) { //hand here means the player
      hand.push(deck.pop());
    }
  
    function displayCards(hand, element) {
      element.innerHTML = "";
      hand.forEach((card) => {
        const cardEl = document.createElement("div");
        cardEl.className = "card";
        cardEl.textContent = card.name;
        element.appendChild(cardEl);
      });
    }
  
    function getHandValue(hand) {
      let value = hand.reduce((acc, card) => acc + card.value, 0);
      const aces = hand.filter((card) => card.name === "A").length;
      for (let i = 0; i < aces; i++) {
        if (value > 21) value -= 10;
      }
      return value;
    }
  
    dealButton.addEventListener("click", function () {
      //console.log("dealButton");
      dealerCards = [];
      playerCards = [];
      //messageEl.textContent = "testing";
      //Shuffling the deck using the shuffleDeck function
      const shuffledDeck = shuffleDeck([...deck, ...deck, ...deck, ...deck]);
      dealCard(shuffledDeck, dealerCards); //use the dealCard function to deal 2 cards to the dealer
      dealCard(shuffledDeck, dealerCards); 
      dealCard(shuffledDeck, playerCards); //use the dealCard function to deal 2 cards to the player
      dealCard(shuffledDeck, playerCards);
  
      //Displaying cards for each player (input player cards arrays and the HTML elements where they should be displayed in)
      displayCards(dealerCards, dealerCardsEl);
      displayCards(playerCards, playerCardsEl);
  
      //Setting up the buttons
      hitButton.disabled = false;
      standButton.disabled = false;
      dealButton.disabled = true;
    });
  
    hitButton.addEventListener("click", function () {
      const shuffledDeck = shuffleDeck([...deck]);
      dealCard(shuffledDeck, playerCards);
      displayCards(playerCards, playerCardsEl);
      if (getHandValue(playerCards) > 21) {
        messageEl.textContent = "Player busts!";
        endGame();
      }
    });
  
    standButton.addEventListener("click", function () {
      while (getHandValue(dealerCards) < 17) {
        const shuffledDeck = shuffleDeck([...deck]);
        dealCard(shuffledDeck, dealerCards);
        displayCards(dealerCards, dealerCardsEl);
      }
      if (getHandValue(dealerCards) > 21) {
        messageEl.textContent = "Dealer busts! Player wins!";
      } else if (getHandValue(dealerCards) < getHandValue(playerCards)) {
        messageEl.textContent = "Player wins!";
      } else if (getHandValue(dealerCards) === getHandValue(playerCards)) {
        messageEl.textContent = "It's a tie!";
      } else {
        messageEl.textContent = "Dealer wins!";
      }
      endGame();
    });
  
    function endGame() {
      hitButton.disabled = true;
      standButton.disabled = true;
      dealButton.disabled = false;
    }
  });
  
