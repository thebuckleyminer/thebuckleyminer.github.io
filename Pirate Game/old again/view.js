/*
Turn main banner into clue thing
toggle between the submit buttons
Make Finish Turn hoverable after flashing
Make Cards not Double Clickable
Abolish Clue Log for Bigger Found Pirate Log
*/


//Christopher Wilkinson
//Assignment 4
Start()

function Start(){
    const currentPlayerNameContainer = document.getElementById('currentPlayerNameContainer');
    currentPlayerNameContainer.style.display = 'none';
    const finishTurnButtonContainer = document.getElementById('finishTurnButtonContainer');
    finishTurnButtonContainer.style.display = 'none';
    const GameStartupOptionWindows = document.getElementById('GameStartupOptionWindows');
    GameStartupOptionWindows.innerHTML = StartingWindowDivisions;
    const HideMainGame = document.getElementById('containerContainer');
    HideMainGame.innerHTML = "";
    TUTORIAL()
}
///// TUTORIAL CODE BELOW /////
function TUTORIAL(){
    let TutorialDiv = document.getElementById('TutoralHere');
    TutorialDiv.innerHTML = TutorialPageOne;
    Page1NextPage()
    function Page1NextPage(){
        let Page1YesButton = document.getElementById("Page1Yes");
        Page1YesButton.addEventListener("click",function() {Page2NextPage()},false);
        let Page1NoButton = document.getElementById("Page1No");
        Page1NoButton.addEventListener("click",function() {closeTURORIAL()},false);
    }
    function Page2NextPage(){
        TutorialDiv.innerHTML = TutorialPageTwo;
        let Page2NextButton = document.getElementById("Page2Next");
        Page2NextButton.addEventListener("click",function() {Page3NextPage()},false);
    }
    function Page3NextPage(){
        TutorialDiv.innerHTML = TutorialPageThree;
        let Page3NextButton = document.getElementById("Page3Next");
        Page3NextButton.addEventListener("click",function() {Page4NextPage()},false);
    }
    function Page4NextPage(){
        TutorialDiv.innerHTML = TutorialPageFour;
        let Page4NextButton = document.getElementById("Page4Next");
        Page4NextButton.addEventListener("click",function() {Page5NextPage()},false);
    }
    function Page5NextPage(){
        TutorialDiv.innerHTML = TutorialPageFive;
        let Page5NextButton = document.getElementById("Page5Next");
        Page5NextButton.addEventListener("click",function() {Page6NextPage()},false);
    }
    function Page6NextPage(){
        TutorialDiv.innerHTML = TutorialPageSix;
        let Page6NextButton = document.getElementById("Page6Next");
        Page6NextButton.addEventListener("click",function() {Page7NextPage()},false);
    }
    function Page7NextPage(){
        TutorialDiv.innerHTML = TutorialPageSeven;
        let Page7NextButton = document.getElementById("Page7Next");
        Page7NextButton.addEventListener("click",function() {Page8NextPage()},false);
    }
    function Page8NextPage(){
        TutorialDiv.innerHTML = TutorialPageEight;
        let Page7NextButton = document.getElementById("Page8Next");
        Page7NextButton.addEventListener("click",function() {closeTURORIAL()},false);
    }
}
function closeTURORIAL(){
    let TutorialDiv = document.getElementById('TutoralHere');
    TutorialDiv.innerHTML = "";
    TutorialDiv.style.display = "none";
    ChoosePlayerRoles();
}
///// TUTORIAL CODE Above /////

///// Pre-Game Player Selection Below /////
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
        if (playerListNum === 0) {gameState.playerList.BlueCaptain.name = "Captain " + PlayerNameString};
        if (playerListNum === 1) {gameState.playerList.GreenCaptain.name = "Captain " + PlayerNameString};
        if (playerListNum === 2) {gameState.playerList.BlueFirstMate.name = "First Mate " + PlayerNameString};
        if (playerListNum === 3) {gameState.playerList.GreenFirstMate.name = "First Mate " + PlayerNameString};
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
///// Pre-Game Player Selection Above /////

///// This "newGame()" Function Generates a New Game /////
let GameCardNumber = 0
function newGame(vertical = 5, horizontal = 5) {
    const showMainGame = document.getElementById('containerContainer');
    showMainGame.innerHTML = mainGameHTMLstring;
    const currentPlayerNameContainer = document.getElementById('currentPlayerNameContainer');
    currentPlayerNameContainer.style.display = 'inline-block';
    const finishTurnButtonContainer = document.getElementById('finishTurnButtonContainer');
    finishTurnButtonContainer.style.display = 'inline-block';
    GameCardNumber = horizontal * vertical;
    let tableVariable = document.getElementById("mainGameTable");
    createCards(GameCardNumber);
    generateWordsForGameState(GameCardNumber);
    generateCardObjectTypeForGameState(GameCardNumber);
    tableVariable.innerHTML = constructTable(vertical, horizontal);

    gameState.cardView.cardViewCaptian= ['b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b'];
    gameState.cardView.cardViewAllOthers= ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f'];  

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
        let  cardCounter= 'card_'+counter;
        let tanCounter = 0;
        let blueCounter = 0;
        let greenCounter = 0;
        for (i = 1; i<=GameCardNumber; i++) {
            counter += 1;
            cardCounter= 'card_'+counter;
            gameState[cardCounter].cardObjectType = randomisedCardList[counter-1]; 
            if (gameState[cardCounter].cardObjectType === 'blue'){gameState[cardCounter].cardColorNumber=blueCounter;blueCounter++};
            if (gameState[cardCounter].cardObjectType === 'green'){gameState[cardCounter].cardColorNumber=greenCounter;greenCounter++};
            if (gameState[cardCounter].cardObjectType === 'tan'){gameState[cardCounter].cardColorNumber=tanCounter;tanCounter++};  
            if (gameState[cardCounter].cardObjectType === 'black'){gameState[cardCounter].cardColorNumber=0};     
        }
    }
    // This is the code that inserts the html and builds the table
    function constructTable(horizontal, vertical) {
        let htmlOutput = "";
        let i = 0;
        let j = 0;
        let counter = 0
        let  cardCounter= 'card_'+counter
        htmlOutput += "<table id= 'gameGrid' class='classCenter'>"
        for (i = horizontal; i > 0; i--) {
            htmlOutput += "<tr>";
            for (j = vertical; j > 0; j--) {
                counter += 1;
                cardCounter= 'card_'+counter;
                //htmlOutput += "<td class=\"" + 'tan' + " card\" id=\""+cardCounter+"\"><div class=\"wordbox\">" + gameState[cardCounter].tileWord + "</div></td>";
                htmlOutput += "<td class=\"" + gameState[cardCounter].cardObjectType + " card\" id=\""+cardCounter+"\"><div class=\"wordbox\">" + gameState[cardCounter].tileWord + "</div></td>";                 
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
            gameState.playerList.currentPlayer[1]=gameState.cardView.cardViewCaptian;
            gameState.playerList.currentPlayer[2]=gameState.playerList.GreenCaptain.role;
            enableCaptainClue(gameState.greenTeamClueLog.runningLog);
            HideFinishTurnButton();            
        } else{
            greenRemaining = cardQuantities[1];
            blueRemaining = cardQuantities[0];
            gameState.otherInfo.startingTeam = "blue";
            gameState.playerList.currentPlayer[0]=gameState.playerList.BlueCaptain.name;
            gameState.playerList.currentPlayer[1]=gameState.cardView.cardViewCaptian;
            gameState.playerList.currentPlayer[2]=gameState.playerList.BlueCaptain.role;
            enableCaptainClue(gameState.blueTeamClueLog.runningLog)
            HideFinishTurnButton();            
        }
        gameState.otherInfo.greenCardsLeft = greenRemaining;
        gameState.otherInfo.blueCardsLeft = blueRemaining;
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
        chosenWordNumber = Math.floor(Math.random()*wordBank.length) // This chooses a random card from the source list
        chosenWord = wordBank[chosenWordNumber]
        wordBank.splice(chosenWordNumber,1) // This removes it from the source list
        return chosenWord
    }
    function setTurnOrder(){
        if (gameState.otherInfo.startingTeam === "blue") {gameState.otherInfo.currentTurn = ["blue","capt"]};
        if (gameState.otherInfo.startingTeam === "green") {gameState.otherInfo.currentTurn = ["green","capt"]};
    }
    setTurnOrder()  
    updateAll()
    inBetweenScreenPopupWindow()
}

///// This "updateAll()" Function is meant to be able to call one function to update all of the values that update throughought the game. /////
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
        blueTeamRoster.innerHTML = gameState.playerList.BlueCaptain.name + "<br>And<br>" + gameState.playerList.BlueFirstMate.name;
        const greenTeamRoster = document.getElementById('greenTeamRoster');
        greenTeamRoster.innerHTML = gameState.playerList.GreenCaptain.name + "<br>And<br>" + gameState.playerList.GreenFirstMate.name;
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
        for (var i = 1; i<=GameCardNumber; i++) {
            let side = renderOrder[counter]
            counter += 1;
            cardCounter= 'card_'+counter;
            let reRender = document.getElementById("card_" + i)
            if (side === 'f') {reRender.classList = ('tan card');}                
            else if (side === 'b') {
                reRender.classList = (gameState[cardCounter].cardObjectType+" card");
                if(gameState[cardCounter].cardObjectType==='tan'){reRender.classList = ("tanBack card");}
            }
            else if (side === 'clicked') {
                reRender.classList = (gameState[cardCounter].cardObjectType+"Clicked"+gameState[cardCounter].cardColorNumber+" card");                
            }
        }
    }
    function checkForWinner(){
        if (gameState.otherInfo.blueCardsLeft === 0) {reRenderCardsGameOver();GameOverBlueWins()};        
        if (gameState.otherInfo.greenCardsLeft === 0) {reRenderCardsGameOver();GameOverGreenWins()};           
        }
    function updateFoundPirateList(){
        let blueTeamFoundPiratesSpan = document.getElementById("blueTeamFoundPiratesSpan");
        let greenTeamFoundPiratesSpan = document.getElementById("greenTeamFoundPiratesSpan");
        let blueFoundHTML = ''
        for (i=0; i<gameState.otherInfo.blueFoundList.length; i++){
            blueFoundHTML += gameState.otherInfo.blueFoundList[i] +"<hr>"
        }
        if (gameState.otherInfo.blueFoundList.length === 0){blueFoundHTML = "<strong>Go Find your Pirate Crew!!!</strong>"}
        blueTeamFoundPiratesSpan.innerHTML = blueFoundHTML;
    
        let greenFoundHTML = ''
        for (i=0; i<gameState.otherInfo.greenFoundList.length; i++){
            greenFoundHTML += gameState.otherInfo.greenFoundList[i] +"<br>"
        }
        if (gameState.otherInfo.greenFoundList.length === 0){greenFoundHTML = "<strong>Go Find your Pirate Crew!!!</strong>"}
        greenTeamFoundPiratesSpan.innerHTML = greenFoundHTML;
    }
    function seeIfBlackGameOver(){
        if (gameState.otherInfo.blackFlipped === true){
            reRenderCardsGameOver()
        }
    }    
    updateScoreBoard()
    updatePlayLogs()
    updateTeamRoster()
    updateCurrentPlayerSign()
    reRenderCardsCurrentPlayer()
    checkForWinner()
    updateFoundPirateList()
    seeIfBlackGameOver()
    const finishTurnButton = document.getElementById('finishTurnButton');
    finishTurnButton.addEventListener("click",NextTurn,false);
    if (parseInt(gameState.otherInfo.currentGuessAllowance) === 0){disableTileClickEventListeners();makeFinishTurnButtonFlash()};
    if (gameState.otherInfo.turnOver === true){disableTileClickEventListeners();makeFinishTurnButtonFlash()};
}

///// The Following functions are used to hide and show different elements /////
function ShowFinishTurnButton(){
    const finishTurnButtonContainer = document.getElementById('finishTurnButtonContainer');
    finishTurnButtonContainer.style.display = 'inline-block'
}
function HideFinishTurnButton(){
    const finishTurnButtonContainer = document.getElementById('finishTurnButtonContainer');
    finishTurnButtonContainer.style.display = 'none'
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
    for (i=0;i<logLength;i += 1) {logOutput += (gameState.blueTeamClueLog.runningLog[i][0]+': '+gameState.blueTeamClueLog.runningLog[i][1]+'<br>')}      
    return logOutput
}
function greenTeamLog() {
    let logOutput = ""
    let logLength = (gameState.greenTeamClueLog.runningLog).length
    for (i=0;i<logLength;i += 1) {logOutput += (gameState.greenTeamClueLog.runningLog[i][0]+': '+gameState.greenTeamClueLog.runningLog[i][1]+'<br>')}      
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

///// This "NextTurn()" Function makes it the next player's turn. /////
function NextTurn(){
    gameState.otherInfo.turnOver = false;
    if (gameState.otherInfo.currentTurn[0] === "blue" && gameState.otherInfo.currentTurn[1] === "capt"){
        gameState.otherInfo.currentTurn=["blue","firstM"];
        gameState.playerList.currentPlayer[0]=gameState.playerList.BlueFirstMate.name;
        gameState.playerList.currentPlayer[1]=gameState.cardView.cardViewAllOthers;
        gameState.playerList.currentPlayer[2]=gameState.playerList.BlueFirstMate.role;
        
    } else if (gameState.otherInfo.currentTurn[0] === "blue" && gameState.otherInfo.currentTurn[1] === "firstM"){
        gameState.otherInfo.currentTurn=["green","capt"];
        gameState.playerList.currentPlayer[0]=gameState.playerList.GreenCaptain.name;
        gameState.playerList.currentPlayer[1]=gameState.cardView.cardViewCaptian;
        gameState.playerList.currentPlayer[2]=gameState.playerList.GreenCaptain.role;
        enableCaptainClue(gameState.greenTeamClueLog.runningLog)
        gameState.otherInfo.currentGuessAllowance = 1
        
    } else if (gameState.otherInfo.currentTurn[0] === "green" && gameState.otherInfo.currentTurn[1] === "capt"){
        gameState.otherInfo.currentTurn=["green","firstM"];
        gameState.playerList.currentPlayer[0]=gameState.playerList.GreenFirstMate.name;
        gameState.playerList.currentPlayer[1]=gameState.cardView.cardViewAllOthers;
        gameState.playerList.currentPlayer[2]=gameState.playerList.GreenFirstMate.role;
        
    } else if (gameState.otherInfo.currentTurn[0] === "green" && gameState.otherInfo.currentTurn[1] === "firstM"){
        gameState.otherInfo.currentTurn=["blue","capt"];
        gameState.playerList.currentPlayer[0]=gameState.playerList.BlueCaptain.name;
        gameState.playerList.currentPlayer[1]=gameState.cardView.cardViewCaptian;
        gameState.playerList.currentPlayer[2]=gameState.playerList.BlueCaptain.role;
        enableCaptainClue(gameState.blueTeamClueLog.runningLog)
        gameState.otherInfo.currentGuessAllowance = 1
    }
    togglePlayModeForPlayer()    
    updateAll()
    inBetweenScreenPopupWindow()
}

function togglePlayModeForPlayer() {
    if (gameState.playerList.currentPlayer[2] === "Captain"){
        disableTileClickEventListeners()
        HideFinishTurnButton()
    } else if (gameState.playerList.currentPlayer[2] === "FirstMate"){
        disableCaptainClue()
        ShowFinishTurnButton()
        enableTileClickEventListeners()
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////   Event Listener code     ///////////////////////////////////////////////////////////////////////////////////////////////////////
function TileEventListenerLogic(event){
    function indexFinder(coordsIn) {return (coordsIn[0]*5)+ coordsIn[1];}
    let gameGrid = document.getElementById("gameGrid");
    let column = this.cellIndex;
    let row = this.parentNode.rowIndex;
    let cell = gameGrid.rows[row].cells[column];
    cell.firstChild.className = "wordboxClicked";
    pushPirateNameToFoundPirateList(cell.id)
    let cellCords =[row, column];       
    let cardSideIndex = indexFinder(cellCords) 
    gameState.cardView.alreadyClicked[cardSideIndex]= true;
    if (gameState[cell.id].cardObjectType === "black"){gameState.otherInfo.blackFlipped = true;}
    else if (gameState.otherInfo.currentTurn[0] !== gameState[cell.id].cardObjectType){updateAll();disableTileClickEventListeners();makeFinishTurnButtonFlash()};            
    if (gameState[cell.id].cardObjectType==='blue'){;gameState.otherInfo.blueCardsLeft -= 1;}                
    if (gameState[cell.id].cardObjectType==='green'){;gameState.otherInfo.greenCardsLeft -= 1;};
    gameState.cardView.cardViewCaptian[cardSideIndex] = 'clicked';
    gameState.cardView.cardViewAllOthers[cardSideIndex] = 'clicked';
    
    gameState.otherInfo.currentGuessAllowance -= 1;
    disableTileClickEventListeners()
    enableTileClickEventListeners()
    updateAll();
}
function enableTileClickEventListeners() {
    let tableCells = document.getElementsByTagName("td");
    lenOfTableCells = tableCells.length;      
    for (i=0; i<lenOfTableCells; i++){if (gameState.cardView.alreadyClicked[i]=== false){tableCells[i].addEventListener("click",TileEventListenerLogic,false)}}   
}
function disableTileClickEventListeners() {
    let tableCells = document.getElementsByTagName("td");
    lenOfTableCells = tableCells.length;      
    for (i=0; i<lenOfTableCells; i++){tableCells[i].removeEventListener("click",TileEventListenerLogic,false)}
}
/////   Event Listener code     ///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function enableCaptainClue(TeamLog){
    let capInputContainer = document.getElementById('capInputContainer');
    capInputContainer.innerHTML = captainInputHTMLstring;
    capInputContainer.style.display = 'block';
    let CaptainsClue = document.getElementById('CaptainsClue');
    let dropDownNumberOfCards = document.getElementById('dropDownNumberOfCards');
    let submitCaptainClueButton = document.getElementById('submitCaptainClueButton');
    submitCaptainClueButton.addEventListener('click', function() {addOutputToLog()}, false);
    submitCaptainClueButton.disabled = true;
    CaptainsClue.addEventListener('keyup',capSubmitButtonWaitForInput,false)
    
    function capSubmitButtonWaitForInput(event) {
        if(CaptainsClue.value !== ''){document.getElementById('submitCaptainClueButton').disabled = false;}
        else {document.getElementById('submitCaptainClueButton').disabled = true;}
    }
    function addOutputToLog(){
        TeamLog.push([CaptainsClue.value, dropDownNumberOfCards.value]);
        gameState.otherInfo.currentGuessAllowance = parseInt(dropDownNumberOfCards.value) + 1;
        CaptainsClue.value='';
        dropDownNumberOfCards.value=''; 
        capInputContainer.innerHTML = '';   
        updateAll();
        NextTurn();
    }
}
function disableCaptainClue(){
    let capInputContainer = document.getElementById('capInputContainer');
    capInputContainer.innerHTML = '';
    capInputContainer.style.display = 'none';
    updateAll();    
}


function pushPirateNameToFoundPirateList(cardNumber){  
    let CardWord = gameState[cardNumber].tileWord;
    let teamColor = gameState[cardNumber].cardObjectType;
    function returnNextPirateRole(teamColor){  
        if (teamColor === "green"){return foundGreenPirateRoleList.splice(0,1)}
        else if (teamColor === "blue"){return foundBluePirateRoleList.splice(0,1)}        
    }
    function chooseRandomFromList(listToChooseFrom) {
        let chosenWord = ''
        chosenWordNumber = Math.floor(Math.random()*listToChooseFrom.length)
        chosenWord = listToChooseFrom[chosenWordNumber]
        listToChooseFrom.splice(chosenWordNumber,1)
        return chosenWord
    }
    let foundPirateFullNameString ='<strong>' + returnNextPirateRole(teamColor) + '</strong>: '+ chooseRandomFromList(pirateFirstNameList)+ ' "The <strong>' + CardWord+ '</strong>" ' +chooseRandomFromList(pirateLastNameList)+'.<br>';
       
    if (teamColor === 'green'){gameState.otherInfo.greenFoundList.push(foundPirateFullNameString)}
    else if (teamColor === 'blue'){gameState.otherInfo.blueFoundList.push(foundPirateFullNameString)};    
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function inBetweenScreenPopupWindow(){
    HideFinishTurnButton()
    let hidePlayerDisplay  = document.getElementById('currentPlayerNameContainer');
    let hideCaptInput = document.getElementById('capInputContainer');
    hidePlayerDisplay.style.display = "none";
    hideCaptInput.style.display = "none";
    let HideTheMain = document.getElementById('containerContainer');
    HideTheMain.style.display = 'none';
    let InbetweenTurnPopupContainer = document.getElementById('InbetweenTurnPopupContainer');
    InbetweenTurnPopupContainer.style.display = 'block';
    InbetweenTurnPopupContainer.innerHTML = '<div id=InbetweenPlayerPopupContainer><div id="helmSpinBetween" class="helmBetweenTurns"></div><div id="inBetweenTurnGoBackPlayer" class="gameModeButtons newPlayerbutton font1">'+gameState.playerList.currentPlayer[0]+'</div><br>'+'<button id="inBetweenTurnGoBackButton" class="gameModeButtons newPlayerbutton font1">Click to Start Turn</button></div>'

    //transform: rotate(3600deg);


    let helmSpinBetween = document.getElementById("helmSpinBetween");
    document.addEventListener("mouseover", function() {messing()},false )
    function messing(){
        helmSpinBetween.style.transform = "rotate(3600deg)";
    }
   
    if (gameState.otherInfo.currentTurn[0] === 'blue'){inBetweenTurnGoBackPlayer.style.backgroundColor = '#3399ff';}
    else if (gameState.otherInfo.currentTurn[0] === 'green'){inBetweenTurnGoBackPlayer.style.backgroundColor = '#78b548';};
    let inBetweenTurnGoBackButton = document.getElementById('inBetweenTurnGoBackButton');
    inBetweenTurnGoBackButton.addEventListener("click", function() {closeInBetweenScreenPopupWindow()}, false);    
    function closeInBetweenScreenPopupWindow(){
        let HideTheMain = document.getElementById('containerContainer');
        HideTheMain.style.display = 'flex';
        InbetweenTurnPopupContainer.innerHTML = "";
        InbetweenTurnPopupContainer.style.display = 'none';
        hidePlayerDisplay.style.display = "inline-block";
        hideCaptInput.style.display = "block";
        if (gameState.playerList.currentPlayer[2] === "FirstMate"){ShowFinishTurnButton()};
    }
}





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function reRenderCardsGameOver() { 
    let renderOrder = gameState.cardView.cardViewCaptian;
    let counter = 0
    let  cardCounter= 'card_'+counter
    for (var i = 1; i<=GameCardNumber; i++) {
        let side = renderOrder[counter]
        counter += 1;
        cardCounter= 'card_'+counter;
        let reRender = document.getElementById("card_" + i)
        if (side === 'f') {
            reRender.classList = ('tan card');
        } else if (side === 'b') {
            reRender.classList = (gameState[cardCounter].cardObjectType+" card");
            if(gameState[cardCounter].cardObjectType==='tan'){
                reRender.classList = ("tanBack card");
            }
        }
    }
    disableTileClickEventListeners();
    
    const turnFinishedBanner = document.getElementById("currentPlayerDisplay");
    turnFinishedBanner.innerHTML = "Game Finished!";
    let PlayAgainButton = document.getElementById("finishTurnButtonContainer");
    PlayAgainButton.innerHTML = "<div id='finishTurnButtonContainer'><button id='finishTurnButton' class='font1 finishTurnButton'>Play Again?</button></div>";
    PlayAgainButton.addEventListener('click', function(){PlayAgainButtonPress()},false)
    function PlayAgainButtonPress(){
        PlayAgainButton.innerHTML ="<div id='finishTurnButtonContainer'><button id='finishTurnButton' class='font1 finishTurnButton'>Finish Turn</button></div>";
        ResetToNewGame();
    }
}





function GameOverBlack(){console.log("GameOver");}
function GameOverGreenWins(){console.log("Green Wins!!!!!");}
function GameOverBlueWins(){console.log("Blue Wins!!!!!");}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function makeFinishTurnButtonFlash() {    
    gameState.otherInfo.turnOver = true;
    const turnFinishedBanner = document.getElementById("currentPlayerDisplay");
    turnFinishedBanner.innerHTML = "Turn Finished!";
    let speed = 500; 
    let flashingfinishTurnButton = document.getElementById('finishTurnButton');
    function flashit(){flashingfinishTurnButton.style.borderColor = 'rgb(90, 90, 90)';}       
    function flashBack(){flashingfinishTurnButton.style.borderColor = 'white';}
    setTimeout(flashit, speed);
    setTimeout(flashBack, speed*2);
    setTimeout(flashit, speed*3);
    setTimeout(flashBack, speed*4);
    setTimeout(flashit, speed*5);
    setTimeout(flashBack, speed*6);
    setTimeout(flashit, speed*7);
    setTimeout(flashBack, speed*8)
};



/*
recode the form on the name pages.

bluewins()
greenWins()
GameOverBlack()==oppositeWins
inbetween Screen

let PlayAgain = document.getElementById('finishTurnButtonContainer');
PlayAgain.innerHTML = '<button id="finishTurnButton" class="font1 finishTurnButton" style="border-color: white;">Play Again!</button>';
PlayAgain.addEventListener("click", function(){ResetToNewGame()}, false);

Add animated dudes

Clean Up all of the code
//Card Flip https://www.youtube.com/watch?v=OV8MVmtgmoY
*/

function ResetToNewGame(){    
    gameState.otherInfo = ResetGame.otherInfo;
    gameState.blueTeamClueLog = ResetGame.blueTeamClueLog;
    gameState.greenTeamClueLog = ResetGame.greenTeamClueLog;
    gameState.cardView = ResetGame.cardView;
    newGame()
}
