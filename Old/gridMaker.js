function randomCardList() {
    let redRemaining = 9
    let blueRemaining = 8
    let blackRemaining = 1
    let tanRemaining = 7
    let cardList = []

    //This is a coinflip to deside which team goes first
    if (Math.round(Math.random()) === 0) {
        redRemaining = 9;
        blueRemaining = 8;
    } else{
        redRemaining = 8;
        blueRemaining = 9;
    }

    for (i = redRemaining; i > 0; i--) {
        cardList.push("red")
    }
    for (i = blueRemaining; i > 0; i--) {
        cardList.push("blue")
    }
    for (i = blackRemaining; i > 0; i--) {
        cardList.push("black")
    }
    for (i = tanRemaining; i > 0; i--) {
        cardList.push("tan")
    }

    let chosenCard = ""
    let outputRandomCardlist = []

    for (i = 25; i > 0; i--) {
        chosenCard = Math.floor(Math.random()*cardList.length) // This chooses a random card from the source list
        outputRandomCardlist.push(cardList[chosenCard]) // This puts that one in the output card list
        cardList.splice(chosenCard,1) // This removes it from the source list
    }

    return outputRandomCardlist
}

