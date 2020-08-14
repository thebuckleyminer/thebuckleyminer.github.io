//Christopher Wilkinson
//Semester Project









function Start(restart=false){
    const currentPlayerNameContainer = document.getElementById('currentPlayerNameContainer');
    currentPlayerNameContainer.style.display = 'none';
    const finishTurnButtonContainer = document.getElementById('finishTurnButtonContainer');
    finishTurnButtonContainer.style.display = 'none';
    const GameStartupOptionWindows = document.getElementById('GameStartupOptionWindows');
    GameStartupOptionWindows.innerHTML = StartingWindowDivisions;
    const HideMainGame = document.getElementById('containerContainer');
    HideMainGame.innerHTML = "";
    TUTORIAL(restart)
}
///// TUTORIAL CODE BELOW /////
function TUTORIAL(restart){
    if (restart === true){closeTURORIAL()}//Bypasses Screen if restarting
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

    const nameTextInput = document.getElementById('nameTextInput');
    const SubmitButton = document.getElementById('submitButton');
    nameTextInput.addEventListener("keyup",submitButtonWaitForInput,false);
    SubmitButton.addEventListener('click', generatePlayerObject, false);

    function submitButtonWaitForInput(event) {
        if(nameTextInput.value !== ''){document.getElementById('submitButton').disabled = false;}
        else {document.getElementById('submitButton').disabled = true;}
    }
    function generatePlayerObject(event){
        event.preventDefault();
        let PlayerNameString = nameTextInput.value;
        UpdatePlayerObjectWithName(playerListNum,PlayerNameString);
        nameTextInput.value = "";
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
    CheckIfAllPlayersNamesIn()//This first helps with restarting the game from local storage 
}


///// Loads The JSON word arrays /////
let wordBank = [];
let pirateLastNameList = [];
let pirateFirstNameList = [];
letAssignmentSixOjbect = new XMLHttpRequest();
letAssignmentSixOjbect.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let tempVarAssign6=this.responseText;
        let jsonGameStateObject = JSON.parse(tempVarAssign6);
        wordBank=jsonGameStateObject.wordBank;
        pirateLastNameList = jsonGameStateObject.pirateLastNameList;
        pirateFirstNameList =jsonGameStateObject.pirateFirstNameList;
    }
};
letAssignmentSixOjbect.open("GET", "./JSONwordLists.json", false);
letAssignmentSixOjbect.send(null);

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
            bannerToTextBox();
            enableCaptainClue(gameState.greenTeamClueLog.runningLog);         
        } else{
            greenRemaining = cardQuantities[1];
            blueRemaining = cardQuantities[0];
            gameState.otherInfo.startingTeam = "blue";
            gameState.playerList.currentPlayer[0]=gameState.playerList.BlueCaptain.name;
            gameState.playerList.currentPlayer[1]=gameState.cardView.cardViewCaptian;
            gameState.playerList.currentPlayer[2]=gameState.playerList.BlueCaptain.role;
            bannerToTextBox();  
            enableCaptainClue(gameState.blueTeamClueLog.runningLog)           
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
    function updateTeamRoster() {
        const blueTeamRoster = document.getElementById('blueTeamRoster');
        blueTeamRoster.innerHTML = gameState.playerList.BlueCaptain.name + "<br>- AND -<br>" + gameState.playerList.BlueFirstMate.name;
        const greenTeamRoster = document.getElementById('greenTeamRoster');
        greenTeamRoster.innerHTML = gameState.playerList.GreenCaptain.name + "<br>- AND -<br>" + gameState.playerList.GreenFirstMate.name;
    }
    function updateCurrentPlayerSign() {
        let CurrentPlayerVariable = document.getElementById("currentPlayerDisplay");
        CurrentPlayerVariable.innerHTML = "It is "+gameState.playerList.currentPlayer[0]+"'s Turn!";
        let currentPlayerBackgroundColor = document.getElementById('currentPlayerNameContainer');
        if (gameState.otherInfo.currentTurn[0] === 'blue'){
            currentPlayerBackgroundColor.style.backgroundColor = '#3399ff';
            currentPlayerBackgroundColor.style.border ="5px solid #10347c";
        }else if (gameState.otherInfo.currentTurn[0] === 'green'){
            currentPlayerBackgroundColor.style.backgroundColor = '#78b548';
            currentPlayerBackgroundColor.style.border ="5px solid #1e5631";};
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
            greenFoundHTML += gameState.otherInfo.greenFoundList[i] +"<hr>"
        }
        if (gameState.otherInfo.greenFoundList.length === 0){greenFoundHTML = "<strong>Go Find your Pirate Crew!!!</strong>"}
        greenTeamFoundPiratesSpan.innerHTML = greenFoundHTML;
    }
    function seeIfBlackGameOver(){
        if (gameState.otherInfo.blackFlipped === true){
            reRenderCardsGameOver()
            GameOverBlack()
        }
    }    
    updateScoreBoard()
    updateTeamRoster()
    updateCurrentPlayerSign()
    reRenderCardsCurrentPlayer()
    checkForWinner()
    updateFoundPirateList()
    seeIfBlackGameOver()
    seeIfBlackGameOver()
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
    let lastIndex = (gameState.blueTeamClueLog.runningLog).length;
    if (lastIndex !==0){logOutput += (gameState.blueTeamClueLog.runningLog[lastIndex-1][0]+': '+gameState.blueTeamClueLog.runningLog[lastIndex-1][1])}         
    return logOutput
}
function greenTeamLog() {
    let logOutput = ""
    let lastIndex = (gameState.greenTeamClueLog.runningLog).length
    if (lastIndex !==0){logOutput += (gameState.greenTeamClueLog.runningLog[lastIndex-1][0]+': '+gameState.greenTeamClueLog.runningLog[lastIndex-1][1])}      
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
        bannerFromTextBox()
        changeMainBanner("Clue: "+blueTeamLog())
        gameState.playerList.currentPlayer[0]=gameState.playerList.BlueFirstMate.name;
        gameState.playerList.currentPlayer[1]=gameState.cardView.cardViewAllOthers;
        gameState.playerList.currentPlayer[2]=gameState.playerList.BlueFirstMate.role;
        
    } else if (gameState.otherInfo.currentTurn[0] === "blue" && gameState.otherInfo.currentTurn[1] === "firstM"){
        gameState.otherInfo.currentTurn=["green","capt"];
        bannerToTextBox();
        gameState.playerList.currentPlayer[0]=gameState.playerList.GreenCaptain.name;
        gameState.playerList.currentPlayer[1]=gameState.cardView.cardViewCaptian;
        gameState.playerList.currentPlayer[2]=gameState.playerList.GreenCaptain.role;
        enableCaptainClue(gameState.greenTeamClueLog.runningLog)
        gameState.otherInfo.currentGuessAllowance = 1
        
    } else if (gameState.otherInfo.currentTurn[0] === "green" && gameState.otherInfo.currentTurn[1] === "capt"){
        gameState.otherInfo.currentTurn=["green","firstM"];
        bannerFromTextBox()
        changeMainBanner("Clue: "+greenTeamLog())
        gameState.playerList.currentPlayer[0]=gameState.playerList.GreenFirstMate.name;
        gameState.playerList.currentPlayer[1]=gameState.cardView.cardViewAllOthers;
        gameState.playerList.currentPlayer[2]=gameState.playerList.GreenFirstMate.role;
        
    } else if (gameState.otherInfo.currentTurn[0] === "green" && gameState.otherInfo.currentTurn[1] === "firstM"){
        gameState.otherInfo.currentTurn=["blue","capt"];
        bannerToTextBox();
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
    } else if (gameState.playerList.currentPlayer[2] === "FirstMate"){
        enableTileClickEventListeners();
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
    if (parseInt(gameState.otherInfo.currentGuessAllowance) === 0){disableTileClickEventListeners();makeFinishTurnButtonFlash()};
    if (gameState.otherInfo.turnOver === true){disableTileClickEventListeners();makeFinishTurnButtonFlash()}
    else{
        disableTileClickEventListeners()
        enableTileClickEventListeners()};
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
        updateAll();
        NextTurn();
    }
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
    let hidePlayerDisplay  = document.getElementById('currentPlayerNameContainer');
    hidePlayerDisplay.style.display = "none";
    let HideTheMain = document.getElementById('containerContainer');
    HideTheMain.style.display = 'none';
    let HideTheTop = document.getElementById('topSection');
    HideTheTop.style.display = 'none';    
    let InbetweenTurnPopupContainer = document.getElementById('InbetweenTurnPopupContainer');
    InbetweenTurnPopupContainer.style.display = 'block';
    InbetweenTurnPopupContainer.innerHTML = '<div id=InbetweenPlayerPopupContainer><div id="helmSpinBetween" class="helmBetweenTurns"></div><div id="inBetweenTurnGoBackPlayer" class="gameModeButtons newPlayerbutton font1">'+gameState.playerList.currentPlayer[0]+'</div><br>'+'<button id="inBetweenTurnGoBackButton" class="gameModeButtons newPlayerbutton font1">Start Turn</button></div>'

    let helmSpinBetween = document.getElementById("helmSpinBetween");
    document.addEventListener("mouseover", function() {superSpin()},false )
    function superSpin(){
        helmSpinBetween.style.transform = "rotate(3600deg)";
    }
   
    if (gameState.otherInfo.currentTurn[0] === 'blue'){
        inBetweenTurnGoBackPlayer.style.backgroundColor = '#3399ff';
        inBetweenTurnGoBackPlayer.style.border ="5px solid #10347c";
    }
    else if (gameState.otherInfo.currentTurn[0] === 'green'){
        inBetweenTurnGoBackPlayer.style.backgroundColor = '#78b548';
        inBetweenTurnGoBackPlayer.style.border ="5px solid #1e5631";
    };
    let inBetweenTurnGoBackButton = document.getElementById('inBetweenTurnGoBackButton');
    inBetweenTurnGoBackButton.addEventListener("click", function() {closeInBetweenScreenPopupWindow()}, false);    
    function closeInBetweenScreenPopupWindow(){
        let HideTheMain = document.getElementById('containerContainer');
        HideTheMain.style.display = 'flex';
        InbetweenTurnPopupContainer.innerHTML = "";
        InbetweenTurnPopupContainer.style.display = 'none';
        hidePlayerDisplay.style.display = "inline-block";
        topSection.style.display = "flex";
        //if (gameState.playerList.currentPlayer[2] === "FirstMate"){bannerFromTextBox()};
        //if (gameState.playerList.currentPlayer[1] === "Captain"){bannerToTextBox()};
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
    
    
    let PlayAgainButton = document.getElementById("finishTurnButtonContainer");
    PlayAgainButton.innerHTML = "<div id='finishTurnButtonContainer'><button id='finishTurnButton' class='font1 finishTurnButton'>Play Again?</button></div>";
    PlayAgainButton.addEventListener('click', function(){PlayAgainButtonPress()},false)
    function PlayAgainButtonPress(){
        PlayAgainButton.innerHTML ="<div id='finishTurnButtonContainer'><button id='finishTurnButton' class='font1 finishTurnButton'>Finish Turn</button></div>";
        ResetToNewGame();
    }
}


function GameOverBlack(){
    if (gameState.otherInfo.currentTurn[0] === 'green'){GameOverBlueWins()}
    else if (gameState.otherInfo.currentTurn[0] === 'blue'){GameOverGreenWins()};
}
function GameOverGreenWins(){
    let gameBackgroundColor = document.getElementById("htmlId");
    gameBackgroundColor.className = "greenConfetti";
    const turnFinishedBanner = document.getElementById("currentPlayerDisplay");
    turnFinishedBanner.innerHTML = "Game Finished!";
    const finalColor = document.getElementById("currentPlayerNameContainer");
    finalColor.style.backgroundColor="rgb(120, 181, 72)";
    changeMainBanner("Green Wins!!!!!")
    let mainBannerNew = document.getElementById("topSection2");
    mainBannerNew.style.backgroundColor = "#78b548";
    mainBannerNew.style.borderColor = "#1e5631";
    mainBannerNew.style.color = "black";
}  
function GameOverBlueWins(){
    let gameBackgroundColor = document.getElementById("htmlId");
    gameBackgroundColor.className = "blueConfetti";
    const turnFinishedBanner = document.getElementById("currentPlayerDisplay");
    turnFinishedBanner.innerHTML = "Game Finished!";
    const finalColor = document.getElementById("currentPlayerNameContainer");
    finalColor.style.backgroundColor="rgb(51, 153, 255)";
    changeMainBanner("Blue Wins!!!!!")
    let mainBannerNew = document.getElementById("topSection2");
    mainBannerNew.style.backgroundColor = "#3399ff";
    mainBannerNew.style.borderColor = "#10347c";
    mainBannerNew.style.color = "black";
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function makeFinishTurnButtonFlash() {    
    gameState.otherInfo.turnOver = true;
    const turnFinishedBanner = document.getElementById("currentPlayerDisplay");
    turnFinishedBanner.innerHTML = "Turn Finished!";
    let speed = 500; 
    let flashingfinishTurnButton = document.getElementById('finishTurnButton');
    function flashit(){flashingfinishTurnButton.className = 'finishTurnButtonFlash font1';}       
    function flashBack(){flashingfinishTurnButton.className = 'finishTurnButton font1';}
    setTimeout(flashit, speed);
    setTimeout(flashBack, speed*2);
    setTimeout(flashit, speed*3);
    setTimeout(flashBack, speed*4);
    setTimeout(flashit, speed*5);
    setTimeout(flashBack, speed*6);
    setTimeout(flashit, speed*7);
    setTimeout(flashBack, speed*8)
};


//Saves player info to logal storage to make it so they can play another game without going through tutorial or name selection.
function ResetToNewGame(){    
    localStorage.setItem('restartOption', "YES");
    localStorage.setItem('savedPlayerList', JSON.stringify(gameState.playerList));
    location.reload();
}

//Determines if restart and starts accordingly
function main(){
    let isThisARestart = localStorage.getItem('restartOption');
    if (isThisARestart === "YES"){
        let savedPlayerList = JSON.parse(localStorage.getItem('savedPlayerList'));
        gameState.playerList = savedPlayerList;
        localStorage.clear();
        Start(true);
    } else{
        localStorage.clear();
        Start();
    }
}
main()


function changeMainBanner(message){
    let mainBannerNew = document.getElementById("TitleText");
    mainBannerNew.innerHTML = message
}

function bannerToTextBox(){
    let bannerToInput = document.getElementById("topSection2");
    bannerToInput.innerHTML=`<input type="text" id="CaptainsClue" name="CaptainsClue" autofocus="" placeholder="Enter Clue Here!" maxlength="20" spellcheck="false">    <select name="dropDownNumberOfCards" class="font1 dropDownNumberOfCards" id="dropDownNumberOfCards">
    <option value="0">0 Cards</option>
    <option value="1">1 Cards</option>
    <option value="2">2 Cards</option>
    <option value="3">3 Cards</option>
    <option value="4">4 Cards</option>
    <option value="5">5 Cards</option>
    <option value="6">6 Cards</option>
    <option value="7">7 Cards</option>
    <option value="8">8 Cards</option>
    <option value="9">9 Cards</option>
</select>`

    let buttonChange = document.getElementById("topSection3");
    buttonChange.innerHTML=`<button id="submitCaptainClueButton" class="submitAndFinishTurnButton font1">Submit and Finish Turn</button>`;
}

function bannerFromTextBox(){
    let bannerRevert = document.getElementById("topSection2");
    bannerRevert.innerHTML = `<h1 id="TitleText">The Legend of Pirate Island</h1>`;
    let buttonChange = document.getElementById("topSection3");
    buttonChange.innerHTML=`<div id='finishTurnButtonContainer'><button id='finishTurnButton' class='font1 finishTurnButton'>Finish Turn</button></div>`;
    const finishTurnButton = document.getElementById('finishTurnButton');
    finishTurnButton.addEventListener("click",NextTurn,false);
    if (parseInt(gameState.otherInfo.currentGuessAllowance) === 0){disableTileClickEventListeners();makeFinishTurnButtonFlash()};
    if (gameState.otherInfo.turnOver === true){disableTileClickEventListeners();makeFinishTurnButtonFlash()};
}