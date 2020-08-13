const gameState = {
    otherInfo: {
        "startingTeam":"blue",
        "currentTurn":"green",
        "gameOver":false,
        "greenCardsLeft":3,
        "blueCardsLeft":5,
        "playerRole": "Captain",
        "showBackColorSide":true,
        "showClueInputControls":false,        
    },
    gameModeInfo: {
        'gameMode' : '' ,//'two player' or 'four player'
        'teams':['a','a'], // 'a' = available 't' = taken //[Spots left on blue, spots left on green]
        'blueRoles':['a','a'], // 'a' = available 't' = taken //[Blue Captain, Blue First Mate]
        'greenRoles':['a','a'], // 'a' = available 't' = taken //[Green Captain, Green First Mate]
    },
    gameTypeProperties: {
        'gameType': '',
        'playerLeftToAddRoleAndTeam': 10,
    },
    
    blueTeamClueLog: {    
        "runningLog" : []
    },
    greenTeamClueLog: {
        "runningLog" : []
    },
    playerList:{
        "currentPlayer" : "",
        'BlueCaptain': "",
        'BlueFirstMate':"",
        'GreenCaptain' :'',
        'GreenFirstMate':'',
        'availableToChooseList': ['y','y','y','y'], //'y' = yes 'n' = no, BlueCap,BlueFM,GreenCap,GreenFMe
    }
}   
////////////////////////ABOVE IS A COPIED GAMESTATE SO THIS WILL RUN, USE REAL ONE, NOT THIS////////////////////////////////////

const newPlayerSelection = document.getElementById('newPlayerSelection');
newPlayerSelection.innerHTML = newestForm;

const newPlayerSelection2 = document.getElementById('newPlayerSelection2');


const BlueCaptainJoinButton = document.getElementById('BlueCaptainJoinButton');
BlueCaptainJoinButton.addEventListener("click", function(){CreatePlayer('BlueCaptain',BlueCaptainJoinButton,0)}, false);

const GreenCaptainJoinButton = document.getElementById('GreenCaptainJoinButton');
GreenCaptainJoinButton.addEventListener("click", function(){CreatePlayer('BlueFirstMate',GreenCaptainJoinButton,1)}, false);

const BlueFirstMateJoinButton = document.getElementById('BlueFirstMateJoinButton');
BlueFirstMateJoinButton.addEventListener("click", function(){CreatePlayer('GreenCaptain',BlueFirstMateJoinButton,2)}, false);

const GreenFirstMateJoinButton = document.getElementById('GreenFirstMateJoinButton');
GreenFirstMateJoinButton.addEventListener("click", function(){CreatePlayer('GreenFirstMate',GreenFirstMateJoinButton,3)}, false);

function hideButton(buttonToHide) {
    buttonToHide.style.display= 'none';
}
function showButton(buttonToHide) {
    buttonToHide.style.display= 'block';
}

function showButtonsThatAreLeft(){
    if (gameState.playerList.availableToChooseList[0] === 'y') {showButton(BlueCaptainJoinButton)} else{hideButton(BlueCaptainJoinButton)};
    if (gameState.playerList.availableToChooseList[1] === 'y') {showButton(GreenCaptainJoinButton)} else{hideButton(GreenCaptainJoinButton)};
    if (gameState.playerList.availableToChooseList[2] === 'y') {showButton(BlueFirstMateJoinButton)} else{hideButton(BlueFirstMateJoinButton)};
    if (gameState.playerList.availableToChooseList[3] === 'y') {showButton(GreenFirstMateJoinButton)} else{hideButton(GreenFirstMateJoinButton)};
}

function CreatePlayer(TeamRole,buttonObject,index){
    gameState.playerList.availableToChooseList[index] = 'n';
    gameState.playerList[TeamRole]=getName();
    hideButton(buttonObject);
    newPlayerSelection.style.display= 'none';
    console.log("worked");
}

function getName() {
    newPlayerSelection.style.display= 'none';
    newPlayerSelection.innerHTML = getPlayerNameForm
    const getPlayerNameFormObject = document.getElementById('playerInfo')
    getPlayerNameFormObject.addEventListener("click",makeSubmitClickable,false)
    getPlayerNameFormObject.addEventListener("keyup",makeSubmitClickable,false)
    getPlayerNameFormObject.addEventListener('submit', generatePlayerObject, false);
    function makeSubmitClickable(event) {
        if(getPlayerNameFormObject.name.value !== ''){
        document.getElementById('submit').disabled = false;
        } else {
        document.getElementById('submit').disabled = true;
        }
    }
    let playerPirateName = getPlayerNameFormObject.name.value; // Name as variable so less verbose later
    function generatePlayerObject(event) {
        event.preventDefault(); //Now we do not have to use php and can handle all of the functionality in JavaScript          
        
        
        
        
        
    }//
    console.log(playerPirateName,'ppn')
    
    newPlayerSelection.style.display= 'block';
    return playerPirateName
}



    /*
    playerObject.name = playerPirateName; // Sets name  
    
    if (playerObject.role==='captain'){
        playerObject.cardView = ['b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b']
    } else if (playerObject.role==='crew'){
        playerObject.cardView = ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f']
    }
    

    const closeForm = document.getElementById('addAForm');
    closeForm.innerHTML = '';
    gameState.gameTypeProperties.playerLeftToAddRoleAndTeam -= 1;


    return playerObject; // Returns the playerObject
    /*
}
















/*
// Functions That Hide Things
function hideStartingContent(){
    hideNewPlayerButton()
    hideStartGameButton()
    hidePlayersNeeded()
    hideRosterContainers()
}
function hideNewPlayerButton(){
    const hideNew = document.getElementById('newPlayerButton');
    hideNew.style.display= 'none';
}
function hideStartGameButton(){
    const hideStart = document.getElementById('StartGameButton');
    hideStart.style.display= 'none';
}
function hidePlayersNeeded(){
    const playerLeftContainer = document.getElementById('waitingOnPlayersContainer');
    playerLeftContainer.style.display= 'none';
}
function hideRosterContainers(){
    const hideGreenRoster =document.getElementById('GreenTeamListContainer');
    const hideBlueRoster =document.getElementById('BlueTeamListContainer');
    hideGreenRoster.style.display= 'none';
    hideBlueRoster.style.display= 'none';
}

// Functions That Unhide Things
function showNewPlayerButton(){
    const hideNew = document.getElementById('newPlayerButton');
    hideNew.style.display= 'block';
}
function showStartGameButton(){
    const hideStart = document.getElementById('StartGameButton');
    hideStart.style.display= 'block';
}
function showRosterContainers(){
    const hideGreenRoster =document.getElementById('GreenTeamListContainer');
    const hideBlueRoster =document.getElementById('BlueTeamListContainer');
    hideGreenRoster.style.display= 'block';
    hideBlueRoster.style.display= 'block';
}
function showPlayersNeeded(){
    const playerLeftContainer = document.getElementById('waitingOnPlayersContainer');
    playerLeftContainer.style.display= 'block';
    const playersLeft = document.getElementById('waitingOnPlayers');
    playersLeft.innerHTML = gameState.gameTypeProperties.playerLeftToAddRoleAndTeam;
}

// Functions that choose between Game Modes
function twoPlayerGame(){
    gameOptionButtonsContainer.style.display= 'none';
    gameState.gameTypeProperties.gameType = "2 Player";
    gameState.gameTypeProperties.playerLeftToAddRoleAndTeam = 2;
    showPlayersNeeded()
    showNewPlayerButton()
}
function fourPlayerGame(){
    gameOptionButtonsContainer.style.display= 'none';
    gameState.gameTypeProperties.gameType = "4 Player";
    gameState.gameTypeProperties.playerLeftToAddRoleAndTeam = 4;
    showPlayersNeeded()
    showNewPlayerButton()
}

// This makes the "Add new player button" clickable
const newPlayerButton = document.getElementById('newPlayerButton');
newPlayerButton.addEventListener("click",clickNewPlayerButton,false);
function clickNewPlayerButton() {
    const newPlayerFormPopup = document.getElementById('addAForm');
    newPlayerFormPopup.innerHTML = newPlayerForm;
    addNewPlayerForm()
}

// This makes the "Start Game Button" clickable and hides both buttons
const StartGameButton = document.getElementById('StartGameButton');
StartGameButton.addEventListener("click", hideGameStartingButtons, false);
function hideGameStartingButtons(){
    newPlayerButton.style.display= 'none';
    StartGameButton .style.display= 'none';
}

////////////////////////////////////////////////////////////////////////////////


//This function displays a functional Add Player Form
function addNewPlayerForm() {
    hideNewPlayerButton()
    hidePlayersNeeded()
    const form = document.forms['playerInfo'];
    form.addEventListener('click',makeSubmitClickable,false);
    form.addEventListener('submit', generatePlayerObject, false);
    function makeSubmitClickable(event) {
        if(form.roleType.value !== '' && form.name.value !== '' && form.teamColor.value !== ''){
        document.getElementById('submit').disabled = false;
        } else {
        document.getElementById('submit').disabled = true;
        }
    }
    function generatePlayerObject(event) {
        renderTeamLists() //Updates the Player Lists to show user who is already playing
        event.preventDefault(); //Now we do not have to use php and can handle all of the functionality in JavaScript     
        const playerObject = {}; //This is the temporary object that stores all of the player information     
        playerPirateName = form.name.value; // Name as variable so less verbose later
        playerObject.name = playerPirateName; // Sets name  
        playerObject.role = form.roleType.value; //Sets role
        // Assigns the initial starting card visibility for the player
        if (playerObject.role==='captain'){
            playerObject.cardView = ['b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b']
        } else if (playerObject.role==='crew'){
            playerObject.cardView = ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f']
        }
        playerObject.team = form.teamColor.value; //Sets Team    
        gameState.playerList[playerPirateName] = playerObject; //Saves the object to the gameState object
        gameState.playerList.playerListAll.push(playerPirateName); //Adds the player's name to the master player list
        // Adds the player's name to the respective team list
        if (playerObject.team === 'green'){
            gameState.playerList.greenPlayerList.push([playerPirateName,playerObject.role]);
        } else if (playerObject.team === 'blue'){
            gameState.playerList.bluePlayerList.push([playerPirateName,playerObject.role]);
        }        
        renderTeamLists() //Updates the Player Lists to show that they have been added 
        // The next two Make the form dissapear
        const closeForm = document.getElementById('addAForm');
        closeForm.innerHTML = '';
        gameState.gameTypeProperties.playerLeftToAddRoleAndTeam -= 1;

        if (gameState.gameTypeProperties.playerLeftToAddRoleAndTeam !== 0) {
            showPlayersNeeded()
            showRosterContainers()
            showNewPlayerButton()
        } else {showStartGameButton()}
        return playerObject; // Returns the playerObject
    }   
}
    
// This updates the Green and Blue Player rosters
function renderTeamLists() {
    const greenList = document.getElementById('greenTeamList');
    const blueList = document.getElementById('BlueTeamList');
    let greenListWords = "";
    let blueListWords = "";  
    const lenGreen = gameState.playerList.greenPlayerList.length;
    const lenBlue = gameState.playerList.bluePlayerList.length;
    if (lenGreen > 0) {
        for (i=0; i<lenGreen; i++) {
            greenListWords += gameState.playerList.greenPlayerList[i];
            greenListWords += '<br>';
        }
    }
    if (lenBlue > 0) {
        for (i=0; i<lenBlue; i++) {
            blueListWords += gameState.playerList.bluePlayerList[i];
            blueListWords += '<br>';
        }
    }
    greenList.innerHTML = greenListWords;
    blueList.innerHTML = blueListWords;
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Running the program
hideStartingContent()
const gameOptionButtonsContainer = document.getElementById('gameOptionButtonsContainer');
const TwoPlayerGameButton = document.getElementById('TwoPlayerGameButton');
TwoPlayerGameButton.addEventListener("click",twoPlayerGame, false);
const FourPlayerGameButton = document.getElementById('FourPlayerGameButton');
FourPlayerGameButton.addEventListener("click",fourPlayerGame, false);
*/

/*

*/

/*
function PirateGameSelectorButtons(numberOfButtons, leftButtonTitle, RightButtonTitle=""){
    const buttons = document.getElementById('buttonContainer');
    buttons.style.display = 'block'
    if (numberOfButtons === 1){
        buttons.innerHTML = "<button id='ButtonOneLeft'></button>";
        const leftButton = document.getElementById('ButtonOneLeft');
        leftButton.textContent = leftButtonTitle;
        leftButton.addEventListener("click",function() {ButtonClick(leftButtonTitle)},false);     
    } else if (numberOfButtons === 2){
        buttons.innerHTML = PirateGameStartingButtons;
        const leftButton = document.getElementById('ButtonOneLeft');
        leftButton.textContent = leftButtonTitle;
        leftButton.addEventListener("click",function() {ButtonClick(leftButtonTitle)},false);     
        const rightButton = document.getElementById('ButtonTwoRight');
        rightButton.textContent = RightButtonTitle;
        rightButton.addEventListener("click",function() {ButtonClick(RightButtonTitle)},false);
    }
}

function PirateGameSelectorButtonsHideAndClear(){
    const buttons = document.getElementById('buttonContainer');
    buttons.innerHTML = '';
    buttons.style.display = 'none'
}
var ButtonSelection = ''
function ButtonClick(returnedString) {
    console.log(returnedString)// Testing
    ButtonSelection = returnedString
    PirateGameSelectorButtonsHideAndClear()
    generateNextButtons()
}
indexCount = 0
function generateNextButtons() {
    if (indexCount===0){
        indexCount += 1;
        PirateGameSelectorButtons(2, '2 Players' , '4 Players');
        gameState.gameModeInfo.gameMode = ButtonSelection;  

    }else if (indexCount===1){
        indexCount += 1;
        PirateGameSelectorButtons(2, 'Blue Crew' , 'Green Crew');
        
        gameState.gameModeInfo.currentPlayer = ButtonSelection;
    }else if (indexCount===2){
        indexCount += 1;
        PirateGameSelectorButtons(2, 'Captain' , 'First Mate');
    }else {
        console.log("Finished!!!");
        PirateGameSelectorButtonsHideAndClear();
    }
}

generateNextButtons()
*/



/*
function buttonSelectionCleaner() {
    if (gameState.gameModeInfo.blueRoles[0] === 't' && gameState.gameModeInfo.blueRoles[1] === 't'){gameState.gameModeInfo.teams[0] = 't'};
    if (gameState.gameModeInfo.greenRoles[0] === 't' && gameState.gameModeInfo.greenRoles[1] === 't'){gameState.gameModeInfo.teams[1] = 't'};
}


function generatePlayerObject(playerID){
    gameState.playerList[playerID] = {}    
    if (gameState.gameModeInfo.teams[0] === "a" && gameState.gameModeInfo.teams[1] === "a") {
        PirateGameSelectorButtons(2, 'Blue Crew' , 'Green Crew');
        gameState.playerList[playerID].teamType = ButtonSelection;
    } else if (gameState.gameModeInfo.teams[0] === "t") {
        PirateGameSelectorButtons(1, 'Blue Crew');//Message that only blue crew options are left
        gameState.playerList[playerID].teamType = ButtonSelection;
    } else if (gameState.gameModeInfo.teams[1] === "t") {
        PirateGameSelectorButtons(1, 'Green Crew');//Message that only green crew options are left
        gameState.playerList[playerID].teamType = ButtonSelection;
    }
    if (gameState.playerList[playerID].teamType = 'Blue Crew') {
        if (gameState.gameModeInfo.blueRoles[0] === "a" && gameState.gameModeInfo.blueRoles[1] === "a") {
            PirateGameSelectorButtons(2, 'Captain' , 'First Mate');
            gameState.playerList[playerID].playerRole = ButtonSelection;
        } else if (gameState.gameModeInfo.teams[0] === "t") {
            PirateGameSelectorButtons(1, 'First Mate');
            gameState.gameModeInfo.teams[1] === "t"
            gameState.playerList[playerID].playerRole = 'First Mate';
        } else if (gameState.gameModeInfo.teams[1] === "t") {
            PirateGameSelectorButtons(1, 'Captain');
            gameState.gameModeInfo.teams[0] === "t"
            gameState.playerList[playerID].playerRole = 'Captain';
        }
    }else if (gameState.playerList[playerID].teamType = 'Green Crew') {
        if (gameState.gameModeInfo.greenRoles[0] === "a" && gameState.gameModeInfo.greenRoles[1] === "a") {
            PirateGameSelectorButtons(2, 'Captain' , 'First Mate');
        } else if (gameState.gameModeInfo.greenRoles[0] === "t") {
            PirateGameSelectorButtons(1, 'First Mate');
            gameState.gameModeInfo.teams[1] === "t"
            gameState.playerList[playerID].playerRole = 'First Mate';
        } else if (gameState.gameModeInfo.greenRoles[1] === "t") {
            PirateGameSelectorButtons(1, 'Captain');
            gameState.gameModeInfo.teams[0] === "t"
            gameState.playerList[playerID].playerRole = 'Captain';
        }
    }
    buttonSelectionCleaner()
}
*/





/*
if (2player) {
    team random blue or Green
    let first player choose role

    Then second player just gets to put their name in and choose other role
}

if (4 player) {
    Choose team first then role, if teams are full, only choose role, if role has already been selected one option
   
}
*/
/*


function generateNextButtons() {
    if (indexCount===0){
        indexCount += 1;
        PirateGameSelectorButtons(2, '2 Players' , '4 Players');
        gameState.gameModeInfo.gameMode = ButtonSelection;  
    }else if (indexCount===1){
        indexCount += 1;
        PirateGameSelectorButtons(2, 'Captain' , 'First Mate');
        gameState.gameModeInfo.gameMode = ButtonSelection;
    }else if (indexCount===2){
        indexCount += 1;
        PirateGameSelectorButtons(2, 'Blue Crew' , 'Green Crew');
    }else {
        console.log("Finished!!!");
        PirateGameSelectorButtonsHideAndClear();
    }
}

if (gameState.gameModeInfo.blueCaptainAvailable === true) 
if (gameState.gameModeInfo.greenCaptainAvailable === true) 
if (gameState.gameModeInfo.blueFirstMateAvailable === true) 
if (gameState.gameModeInfo.greenFirstMateAvailable === true)

if (gameState.gameModeInfo.greenCaptainAvailable === true && gameState.gameModeInfo.greenFirstMateAvailable === true) {
    PirateGameSelectorButtons(2, 'Captain' , 'First Mate');
} else if (gameState.gameModeInfo.greenCaptainAvailable === false && gameState.gameModeInfo.greenFirstMateAvailable === true) {
    PirateGameSelectorButtons(1, 'First Mate');
} else if (gameState.gameModeInfo.greenCaptainAvailable === true && gameState.gameModeInfo.greenFirstMateAvailable === false) {
    PirateGameSelectorButtons(1, 'Captain');
} else if (gameState.gameModeInfo.greenCaptainAvailable === false && gameState.gameModeInfo.greenFirstMateAvailable === false) {
    //PirateGameSelectorButtons(2, 'Captain' , 'First Mate');
}



*/