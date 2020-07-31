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
        'playerListAll' : [],
        'greenPlayerList' : [],
        'bluePlayerList' : [],
    }
}   
////////////////////////ABOVE IS A COPIED GAMESTATE SO THIS WILL RUN, USE REAL ONE, NOT THIS////////////////////////////////////

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
    playersLeft.innerHTML = gameState.gameTypeProperties.playerLeftToAddRoleAndTeam
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




