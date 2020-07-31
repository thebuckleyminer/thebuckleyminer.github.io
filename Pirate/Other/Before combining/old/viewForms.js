PirateGameStartingButtons = `
<button id='ButtonOneLeft'></button>
or
<button id='ButtonTwoRight'></button>
`
PirateGameOneStartingButton = "<button id='ButtonOneLeft'></button>"

const newestForm= `
<div id='userPlayerSelect'>
    <button id='BlueCaptainJoinButton'>Join as The Blue Pirate Captain</button><button id='GreenCaptainJoinButton'>Join as The Green Pirate Captain</button>
    <button id='BlueFirstMateJoinButton'>Join as The Blue First Mate</button><button id='GreenFirstMateJoinButton'>Join as The Green First Mate</button>
</div>`

getPlayerNameForm = `
<form id='playerInfo'>
    <h3>What is your Pirate Name?</h3>
    <label for='name'>Yer Pirate Name:
        <input type='text' id='name' name='name' autofocus placeholder='Name' maxlength=32>
    </label>
    <br>
    <br>
    <button type='submit' id='submit' disabled>Submit</button>
</form>
`
/*
    if (playerObject.role==='captain'){
            playerObject.cardView = ['b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b']
        } else if (playerObject.role==='crew'){
            playerObject.cardView = ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f']
*/



















































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



////////////////////////////////////////////////////////////////////////////////


//This function displays a functional Add Player Form
function addNewPlayerForm() {
    const form = document.getElementById('playerInfo');
    form.addEventListener('click',makeSubmitClickable,false);
    form.addEventListener('submit', generatePlayerObject, false);
    function makeSubmitClickable(event) {
        if(form.name.value !== ''){
        document.getElementById('submit').disabled = false;
        } else {
        document.getElementById('submit').disabled = true;
        }
    }
    function generatePlayerObject(event) {
        //renderTeamLists() //Updates the Player Lists to show user who is already playing
        event.preventDefault(); //Now we do not have to use php and can handle all of the functionality in JavaScript     
        const playerObject = {}; //This is the temporary object that stores all of the player information     
        playerPirateName = form.name.value; // Name as variable so less verbose later
        playerObject.name = playerPirateName; // Sets name  
        /*
        if (playerObject.role==='captain'){
            playerObject.cardView = ['b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b']
        } else if (playerObject.role==='crew'){
            playerObject.cardView = ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f']
        }
        */

        const closeForm = document.getElementById('addAForm');
        closeForm.innerHTML = '';
        gameState.gameTypeProperties.playerLeftToAddRoleAndTeam -= 1;


        return playerObject; // Returns the playerObject
    }   
}
/*   
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
*/


/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Running the program
hideStartingContent()
const gameOptionButtonsContainer = document.getElementById('gameOptionButtonsContainer');
const TwoPlayerGameButton = document.getElementById('TwoPlayerGameButton');
TwoPlayerGameButton.addEventListener("click",twoPlayerGame, false);
const FourPlayerGameButton = document.getElementById('FourPlayerGameButton');
FourPlayerGameButton.addEventListener("click",fourPlayerGame, false);
*/



