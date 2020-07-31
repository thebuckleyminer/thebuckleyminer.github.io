//Implement Later
/*
    let TeamColorVariable = document.getElementById("currentTeamDisplayColor");
    
    let BlueScoreVariable = document.getElementById("blueScore");
    let GreenScoreVariable = document.getElementById("greenScore");
    BlueScoreVariable.innerHTML = blueCardsLeft();
    GreenScoreVariable.innerHTML = greenCardsLeft();
    //TeamColorVariable.innerHTML = currentTurnColor();

*/
//Christopher Wilkinson
//Assignment 4
let GameCardNumber = 0
// This is the function that is called upon loading the website's html page
function newGame(vertical = 5, horizontal = 5) {
    GameCardNumber = horizontal * vertical;
    let tableVariable = document.getElementById("mainGameTable");
    createCards(GameCardNumber);
    generateWordsForGameState(GameCardNumber);
    generateCardObjectTypeForGameState(GameCardNumber);
    tableVariable.innerHTML = constructTable(vertical, horizontal);
    
    function createCards(GameCardNumber) {
        let counter = 0
        let  cardCounter= 'card_'+counter
        for (var i = 1; i<=GameCardNumber; i++) {
            counter += 1;
            cardCounter= 'card_'+counter;
            gameState[cardCounter] = {};
            gameState[cardCounter].cardObjectType = "black";
            gameState[cardCounter].tileWord = cardCounter;
        }
    }
    // This function when called generates all new words for the 25 cards.
    function generateWordsForGameState(GameCardNumber) {
        let counter = 0
        let  cardCounter= 'card_'+counter
        for (i = 1; i<=GameCardNumber; i++) {
            counter += 1;
            cardCounter= 'card_'+counter;
            gameState[cardCounter].tileWord = chooseAWord()        
        }    
    }
    // This function when called generates 25 new card types(color of a given card).
    function generateCardObjectTypeForGameState(GameCardNumber) {
        const randomisedCardList = randomCardList()
        let counter = 0
        let  cardCounter= 'card_'+counter
        for (i = 1; i<=GameCardNumber; i++) {
            counter += 1;
            cardCounter= 'card_'+counter;
            gameState[cardCounter].cardObjectType = randomisedCardList[counter-1]        
        }
    }
    // This is the code that inserts the html and builds the table
    function constructTable(horizontal, vertical) {
        let htmlOutput = "";
        let i = 0;
        let j = 0;
        let counter = 0
        let  cardCounter= 'card_'+counter
        htmlOutput += "<table>"
        for (i = horizontal; i > 0; i--) {
            htmlOutput += "<tr>";
            for (j = vertical; j > 0; j--) {
                counter += 1;
                cardCounter= 'card_'+counter;
                htmlOutput += "<td class=\"" + 'tan' + " card\" id=\""+cardCounter+"\"><div class=\"wordbox\">" + gameState[cardCounter].tileWord + "</div></td>";
                //htmlOutput += "<td class=\"" + gameState[cardCounter].cardObjectType + " card\" id=\""+cardCounter+"\"><div class=\"wordbox\">" + gameState[cardCounter].tileWord + "</div></td>";                 
            }
            htmlOutput += "</tr>";
        }
        htmlOutput += "</table>"
        return htmlOutput;
    }
    function scaleableGameLayout(GameCardNumber) {
        let numoftiles = GameCardNumber
        let numofBlueandGreen = numoftiles * 0.68
        let blue = Math.trunc(numofBlueandGreen/2)+1
        let green = Math.trunc(numofBlueandGreen/2)
        let black = 0
        if (numoftiles <= 25) {black = 1} else{black = Math.floor(((numoftiles - 15)/10)) +1} 
        let tan = numoftiles-blue-green-black
        return [parseInt(blue),parseInt(green),parseInt(tan),parseInt(black)]
    }
    // This function simulates a coin flip and chooses who goes first (they have nine cards) and who goes second (they have eight cards)
    // It also makes the cards generate in a random order.
    function randomCardList() {
        let cardQuantities = scaleableGameLayout(GameCardNumber)
        let blueRemaining = 0
        let greenRemaining = 0
        let tanRemaining = cardQuantities[2]
        let blackRemaining = cardQuantities[3]
        let cardList = []
        //This is a coinflip to deside which team goes first
        if (Math.round(Math.random()) === 0) {
            greenRemaining = cardQuantities[0];
            blueRemaining = cardQuantities[1];
            gameState.otherInfo.startingTeam = "green";
        } else{
            greenRemaining = cardQuantities[1];
            blueRemaining = cardQuantities[0];
            gameState.otherInfo.startingTeam = "blue";
            
        }
        gameState.otherInfo.greenCardsLeft = greenRemaining
        gameState.otherInfo.blueCardsLeft = blueRemaining
    
        for (i = greenRemaining; i > 0; i--) {cardList.push("green")}
        for (i = blueRemaining; i > 0; i--) {cardList.push("blue")}
        for (i = blackRemaining; i > 0; i--) {cardList.push("black")}
        for (i = tanRemaining; i > 0; i--) {cardList.push("tan")}
    
        let chosenCard = ""
        let outputRandomCardlist = []
    
        for (i = GameCardNumber; i > 0; i--) {
            chosenCard = Math.floor(Math.random()*cardList.length) // This chooses a random card from the source list
            outputRandomCardlist.push(cardList[chosenCard]) // This puts that one in the output card list
            cardList.splice(chosenCard,1) // This removes it from the source list
        }    
        return outputRandomCardlist
    }
    // This function helps with assigning a word to a card object, I also coded it in a way that the same word could not be selected twice.
    function chooseAWord() {
        let chosenWord = ''
        chosenWordNumber = Math.floor(Math.random()*gameState.wordBank.length) // This chooses a random card from the source list
        chosenWord = gameState.wordBank[chosenWordNumber]
        gameState.wordBank.splice(chosenWordNumber,1) // This removes it from the source list
        return chosenWord
    }
    function setTurnOrder(){
        if (gameState.otherInfo.startingTeam === "blue") {gameState.otherInfo.currentTurn = ["blue","capt"]};
        if (gameState.otherInfo.startingTeam === "green") {gameState.otherInfo.currentTurn = ["green","capt"]};
    }
    setTurnOrder()  
    updateAll()
}

///This will be the function to update the Heads Up Display
function updateAll(){
    function updateScoreBoard() {
        let BlueScoreVariable = document.getElementById("blueScore");
        let GreenScoreVariable = document.getElementById("greenScore");
        BlueScoreVariable.innerHTML = gameState.otherInfo.blueCardsLeft;
        GreenScoreVariable.innerHTML = gameState.otherInfo.greenCardsLeft;
    }
    function updatePlayLogs() {
        let greenPlayLog = document.getElementById("greenTeamLog");
        let bluePlayLog = document.getElementById("blueTeamLog");
        greenPlayLog.innerHTML = blueTeamLog();
        bluePlayLog.innerHTML = greenTeamLog();
    }
    
    updateScoreBoard()
    updatePlayLogs()
}


function updateCurrentPlayerSign() {
    let CurrentPlayerVariable = document.getElementById("currentPlayerDisplay");
    name = gameState.otherInfo.currentTurn[0]
    role = 
    CurrentPlayerVariable.innerHTML = currentTurn();
}

function clicker(){
    const card_1_Object = document.getElementById("card_1");
    const card_2_Object = document.getElementById("card_2");
    const card_3_Object = document.getElementById("card_3");
    const card_4_Object = document.getElementById("card_4");
    const card_5_Object = document.getElementById("card_5");
    const card_6_Object = document.getElementById("card_6");
    const card_7_Object = document.getElementById("card_7");
    const card_8_Object = document.getElementById("card_8");
    const card_9_Object = document.getElementById("card_9");
    const card_10_Object = document.getElementById("card_10");
    const card_11_Object = document.getElementById("card_11");
    const card_12_Object = document.getElementById("card_12");
    const card_13_Object = document.getElementById("card_13");
    const card_14_Object = document.getElementById("card_14");
    const card_15_Object = document.getElementById("card_15");
    const card_16_Object = document.getElementById("card_16");
    const card_17_Object = document.getElementById("card_17");
    const card_18_Object = document.getElementById("card_18");
    const card_19_Object = document.getElementById("card_19");
    const card_20_Object = document.getElementById("card_20");
    const card_21_Object = document.getElementById("card_21");
    const card_22_Object = document.getElementById("card_22");
    const card_23_Object = document.getElementById("card_23");
    const card_24_Object = document.getElementById("card_24");
    const card_25_Object = document.getElementById("card_25");
    card_1_Object.addEventListener('click',flipCardClicker,false);
    card_2_Object.addEventListener('click',flipCardClicker,false);
    card_3_Object.addEventListener('click',flipCardClicker,false);
    card_4_Object.addEventListener('click',flipCardClicker,false);
    card_5_Object.addEventListener('click',flipCardClicker,false);
    card_6_Object.addEventListener('click',flipCardClicker,false);
    card_7_Object.addEventListener('click',flipCardClicker,false);
    card_8_Object.addEventListener('click',flipCardClicker,false);
    card_9_Object.addEventListener('click',flipCardClicker,false);
    card_10_Object.addEventListener('click',flipCardClicker,false);
    card_11_Object.addEventListener('click',flipCardClicker,false);
    card_12_Object.addEventListener('click',flipCardClicker,false);
    card_13_Object.addEventListener('click',flipCardClicker,false);
    card_14_Object.addEventListener('click',flipCardClicker,false);
    card_15_Object.addEventListener('click',flipCardClicker,false);
    card_16_Object.addEventListener('click',flipCardClicker,false);
    card_17_Object.addEventListener('click',flipCardClicker,false);
    card_18_Object.addEventListener('click',flipCardClicker,false);
    card_19_Object.addEventListener('click',flipCardClicker,false);
    card_20_Object.addEventListener('click',flipCardClicker,false);
    card_21_Object.addEventListener('click',flipCardClicker,false);
    card_22_Object.addEventListener('click',flipCardClicker,false);
    card_23_Object.addEventListener('click',flipCardClicker,false);
    card_24_Object.addEventListener('click',flipCardClicker,false);
    card_25_Object.addEventListener('click',flipCardClicker,false);

    function flipCardClicker(){
        card_25_Object.classList.toggle("tan");
        card_25_Object.classList.toggle("blue");
    }
}










function currentTurn() {
    currentPlayer = gameState.playerList.currentPlayer;
    return gameState.playerList[currentPlayer].name;
}
function currentTurnColor() {
    if (gameState.otherInfo.currentTurn === 'green'){
        return "Background Color Green"
    } else if (gameState.otherInfo.currentTurn === 'blue') {
        return "Background Color Blue"
    }
}

function blueTeamLog() {
    let logOutput = ""
    let logLength = (gameState.blueTeamClueLog.runningLog).length
    for (i=0;i<logLength;i += 2) {
        logOutput += (gameState.blueTeamClueLog.runningLog[i]+':'+gameState.blueTeamClueLog.runningLog[i+1]+'\n')
    }    
    return logOutput
}
function greenTeamLog() {
    let logOutput = ""
    let logLength = (gameState.greenTeamClueLog.runningLog).length
    for (i=0;i<logLength;i += 2) {
        logOutput += (gameState.greenTeamClueLog.runningLog[i]+':'+gameState.greenTeamClueLog.runningLog[i+1]+'\n')
    }    
    return logOutput
}


    
function blueCluePrompt() {
    var blueClueInput = prompt("Blue Team Clue", "Enter Clue Here");
    var blueClueInputNumber = prompt("Number of cards that match clue", "Enter number of cards to choose here");
    gameState.blueTeamClueLog.runningLog.push(blueClueInput,blueClueInputNumber)
}

function greenCluePrompt() {
    var greenClueInput = prompt("Blue Team Clue", "Enter Clue Here");
    var greenClueInputNumber = prompt("Number of cards that match clue", "Enter number of cards to choose here");
    gameState.greenTeamClueLog.runningLog.push(greenClueInput,greenClueInputNumber)
}


// Part of the "Next turn" functions 
function reRenderCardsCurrentPlayer() {
    currentPlayer = gameState.playerList.currentPlayer    
    let renderOrder = gameState.playerList[currentPlayer].cardView;
    let counter = 0
    let  cardCounter= 'card_'+counter
    for (var i = 1; i<GameCardNumber; i++) {
        let side = renderOrder[counter]
        counter += 1;
        cardCounter= 'card_'+counter;
        let reRender = document.getElementById("card_" + i)
        if (side === 'f') {
            reRender.classList = ('tan card');
        } else if (side === 'b') {
            reRender.classList = (gameState[cardCounter].cardObjectType+" card");
        }
    }
}





function NextTurn(){
    if (gameState.otherInfo.currentTurn[0] === "blue" && gameState.otherInfo.currentTurn[1] === "capt"){gameState.otherInfo.currentTurn=["blue","firstM"];gameState.playerList.currentPlayer=gameState.playerList.BlueCaptain.name};
    if (gameState.otherInfo.currentTurn[0] === "blue" && gameState.otherInfo.currentTurn[1] === "firstM"){gameState.otherInfo.currentTurn=["green","capt"];gameState.playerList.currentPlayer=gameState.playerList.BlueFirstMate.name};
    if (gameState.otherInfo.currentTurn[0] === "green" && gameState.otherInfo.currentTurn[1] === "capt"){gameState.otherInfo.currentTurn=["green","firstM"];gameState.playerList.currentPlayer=gameState.playerList.GreenCaptain.name};
    if (gameState.otherInfo.currentTurn[0] === "green" && gameState.otherInfo.currentTurn[1] === "firstM"){gameState.otherInfo.currentTurn=["blue","capt"];gameState.playerList.currentPlayer=gameState.playerList.GreenFirstMate.name};
    //renderColor
    //renderNamePlack
    //render input form if captian role
}