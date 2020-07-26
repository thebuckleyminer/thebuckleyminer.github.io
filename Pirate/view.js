ChooseGameMode()
///////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////// Start Starting Menus\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function ChooseGameMode(){
    const GameStartupOptionWindows = document.getElementById('GameStartupOptionWindows');
    GameStartupOptionWindows.innerHTML = StartingWindowDivisions;
    const HideMainGame = document.getElementById('containerContainer');
    HideMainGame.innerHTML = "";
    
    const gameModeButtonWindow = document.getElementById('gameModeButtonWindow');
    gameModeButtonWindow.innerHTML = gameTypeButtonsHTMLstring;
    const twoPlayerGameButton = document.getElementById('twoPlayerGameButton');
    const fourPlayerGameButton = document.getElementById('fourPlayerGameButton');
    twoPlayerGameButton.addEventListener("click",gameModeTwoPlayer,false);
    fourPlayerGameButton.addEventListener("click",gameModeFourPlayer,false);
    function gameModeTwoPlayer(){
        gameState.gameModeInfo.gameMode = 'twoPlayer' 
        gameModeButtonWindow.innerHTML = '';
        ChoosePlayerRoles()
    }
    function gameModeFourPlayer(){
        gameState.gameModeInfo.gameMode = 'fourPlayer'
        gameModeButtonWindow.innerHTML = '';
        ChoosePlayerRoles()
    }    
}
function ChoosePlayerRoles() {
    const newPlayerNameFormWindow = document.getElementById('newPlayerNameFormWindow');
    newPlayerButtonWindow.innerHTML = buttonsHTMLstring;
    newPlayerNameFormWindow.innerHTML = nameFourmHTMLstring;
    const BlueCaptainJoinButton = document.getElementById('BlueCaptainJoinButton');
    const GreenCaptainJoinButton = document.getElementById('GreenCaptainJoinButton');
    const BlueFirstMateJoinButton = document.getElementById('BlueFirstMateJoinButton');
    const GreenFirstMateJoinButton = document.getElementById('GreenFirstMateJoinButton');
    BlueCaptainJoinButton.addEventListener("click",function() {PlayerButtonClicked(BlueCaptainJoinButton,0)},false);
    GreenCaptainJoinButton.addEventListener("click",function() {PlayerButtonClicked(GreenCaptainJoinButton,1)},false);
    BlueFirstMateJoinButton.addEventListener("click",function() {PlayerButtonClicked(BlueFirstMateJoinButton,2)},false);
    GreenFirstMateJoinButton.addEventListener("click",function() {PlayerButtonClicked(GreenFirstMateJoinButton,3)},false);
    let playerListNum = 10;
    function PlayerButtonClicked(ObjectName,playerIndex){
        playerListNum = playerIndex;
        HideHTML(ObjectName);
        swichToAddNameForm()
    }
    function swichToAddNameForm(){
        HideHTML(newPlayerButtonWindow);
        ShowHTML(newPlayerNameFormWindow);
    }
    function swichBackToButtons(){
        HideHTML(newPlayerNameFormWindow);
        ShowHTML(newPlayerButtonWindow);
    }
    function HideHTML(elementName) {elementName.style.display= 'none';}
    function ShowHTML(elementName) {elementName.style.display= 'block';} 

    const addPlayerNameForm = document.getElementById('addPlayerNameForm');
    const SubmitButton = document.getElementById('submitButton');
    addPlayerNameForm.addEventListener("keyup",submitButtonWaitForInput,false);
    addPlayerNameForm.addEventListener('submit', generatePlayerObject, false);

    function submitButtonWaitForInput(event) {
        if(addPlayerNameForm.name.value !== ''){document.getElementById('submitButton').disabled = false;}
        else {document.getElementById('submitButton').disabled = true;}
    }
    function generatePlayerObject(event){
        event.preventDefault();
        let PlayerNameString = addPlayerNameForm.name.value;
        UpdatePlayerObjectWithName(playerListNum,PlayerNameString);
        addPlayerNameForm.reset();
        CheckIfAllPlayersNamesIn();
        swichBackToButtons();
    }
    function UpdatePlayerObjectWithName(playerListNum,PlayerNameString) {    
        if (playerListNum === 0) {gameState.playerList.BlueCaptain.name = PlayerNameString};
        if (playerListNum === 1) {gameState.playerList.GreenCaptain.name = PlayerNameString};
        if (playerListNum === 2) {gameState.playerList.BlueFirstMate.name = PlayerNameString};
        if (playerListNum === 3) {gameState.playerList.GreenFirstMate.name = PlayerNameString};
    }
    function CheckIfAllPlayersNamesIn() {
        if (gameState.playerList.BlueCaptain.name !== '' && gameState.playerList.BlueFirstMate.name !== '' && gameState.playerList.GreenCaptain.name !== ''&& gameState.playerList.GreenFirstMate.name !== ''){
            StartGame()
        } else{document.getElementById('submitButton').disabled = true;}
    }
    function StartGame() {
        newPlayerButtonWindow.innerHTML = '';
        newPlayerNameFormWindow.innerHTML = '';
        newGame()
    }
    swichBackToButtons()
    
}

//This Runs The whole Starting Menus.
////////////////////////////////////////// END Starting Menus\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//Christopher Wilkinson
//Assignment 4
let GameCardNumber = 0
// This is the function that is called upon loading the website's html page
function newGame(vertical = 5, horizontal = 5) {
    const showMainGame = document.getElementById('containerContainer');
    showMainGame.innerHTML = mainGameHTMLstring;
    
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
        htmlOutput += "<table class='classCenter'>"
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
            gameState.playerList.currentPlayer[0]=gameState.playerList.GreenCaptain.name;
            gameState.playerList.currentPlayer[1]=['b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b'];
            
        } else{
            greenRemaining = cardQuantities[1];
            blueRemaining = cardQuantities[0];
            gameState.otherInfo.startingTeam = "blue";
            gameState.playerList.currentPlayer[0]=gameState.playerList.BlueCaptain.name;
            gameState.playerList.currentPlayer[1]=['b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b'];
            
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
        bluePlayLog.innerHTML = blueTeamLog();
        greenPlayLog.innerHTML = greenTeamLog();
    }
    function updateTeamRoster() {
        const blueTeamRoster = document.getElementById('blueTeamRoster');
        blueTeamRoster.innerHTML = "Captain " + gameState.playerList.BlueCaptain.name + "<br>And<br>First Mate " + gameState.playerList.BlueFirstMate.name;
        const greenTeamRoster = document.getElementById('greenTeamRoster');
        greenTeamRoster.innerHTML = "Captain " + gameState.playerList.GreenCaptain.name + "<br>And<br>First Mate " + gameState.playerList.GreenFirstMate.name;
    }
    function updateCurrentPlayerSign() {
        let CurrentPlayerVariable = document.getElementById("currentPlayerDisplay");
        CurrentPlayerVariable.innerHTML = "It is "+gameState.playerList.currentPlayer[0]+"'s Turn!";
        let currentPlayerBackgroundColor = document.getElementById('currentPlayerNameContainer');
        if (gameState.otherInfo.currentTurn[0] === 'blue'){currentPlayerBackgroundColor.style.backgroundColor = '#3399ff';}
        else if (gameState.otherInfo.currentTurn[0] === 'green'){currentPlayerBackgroundColor.style.backgroundColor = '#78b548';};
    }
    function reRenderCardsCurrentPlayer() { 
        let renderOrder = gameState.playerList.currentPlayer[1];
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
    updateScoreBoard()
    updatePlayLogs()
    updateTeamRoster()
    updateCurrentPlayerSign()
    reRenderCardsCurrentPlayer()
    const finishTurnButton = document.getElementById('finishTurnButton');
    finishTurnButton.addEventListener("click",NextTurn,false);
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


function NextTurn(){
    if (gameState.otherInfo.currentTurn[0] === "blue" && gameState.otherInfo.currentTurn[1] === "capt"){
        gameState.otherInfo.currentTurn=["blue","firstM"];
        gameState.playerList.currentPlayer[0]=gameState.playerList.BlueFirstMate.name;
        gameState.playerList.currentPlayer[1]=gameState.playerList.BlueFirstMate.cardView;
    } else if (gameState.otherInfo.currentTurn[0] === "blue" && gameState.otherInfo.currentTurn[1] === "firstM"){
        gameState.otherInfo.currentTurn=["green","capt"];
        gameState.playerList.currentPlayer[0]=gameState.playerList.GreenCaptain.name;
        gameState.playerList.currentPlayer[1]=gameState.playerList.GreenCaptain.cardView;
    } else if (gameState.otherInfo.currentTurn[0] === "green" && gameState.otherInfo.currentTurn[1] === "capt"){
        gameState.otherInfo.currentTurn=["green","firstM"];
        gameState.playerList.currentPlayer[0]=gameState.playerList.GreenFirstMate.name;
        gameState.playerList.currentPlayer[1]=gameState.playerList.GreenFirstMate.cardView;
    } else if (gameState.otherInfo.currentTurn[0] === "green" && gameState.otherInfo.currentTurn[1] === "firstM"){
        gameState.otherInfo.currentTurn=["blue","capt"];
        gameState.playerList.currentPlayer[0]=gameState.playerList.BlueCaptain.name;
        gameState.playerList.currentPlayer[1]=gameState.playerList.BlueCaptain.cardView;
    }
    updateAll()
    
    //renderColor
    
    //render input form if captian role
}











