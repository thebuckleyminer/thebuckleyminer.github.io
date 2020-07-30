const StartingWindowDivisions =`
<div id="gameModeButtonWindow"></div>
<div id="newPlayerButtonWindow"></div>
<div id=newPlayerNameFormWindow></div>`

const gameTypeButtonsHTMLstring =`
<h2 class='font1 whiteText oneAndHalfEm'>Do ye wish to embark with one ship or two?</h2>
<button id='twoPlayerGameButton' class = "gameModeButtons newPlayerbutton font1">Two Player Game</button><span id='orWord'> or </span><button id='fourPlayerGameButton' class = "gameModeButtons newPlayerbutton font1">Four Player Game</button>`

const buttonsHTMLstring=`
<h1 class='whiteText'>Every successful ship is lead by a Captain and a First Mate!</h1>
<div id='playerSelectionButtonContainer'>
    <h2 class='whiteText'> Who do ye wish to be? (Choose your player below) </h2>
    <div id='roleButtonDivision class='classCenter'>
        <button id='BlueCaptainJoinButton' class ='blueButton newPlayerbutton font1'>The Blue Pirate Captain</button>
        <button id='GreenCaptainJoinButton' class ='greenButton newPlayerbutton font1'>The Green Pirate Captain</button>
        <button id='BlueFirstMateJoinButton' class ='blueButton newPlayerbutton font1'>The Blue First Mate</button>
        <button id='GreenFirstMateJoinButton' class ='greenButton newPlayerbutton font1'>The Green First Mate</button>
    </div>        
</div>`

const nameFourmHTMLstring =`
<form id='addPlayerNameForm' spellcheck="false">
<h1 class='whiteText'>What be ye Pirate Name:</h1>
<input type='text' id='name' name='name' autofocus placeholder=' Name' maxlength=32>
<button type='submitButton' class='newPlayerSubmitButton newPlayerbutton font1' id='submitButton' disabled>Submit</button>
</form>`

const mainGameHTMLstring =`
<div id=blueContainer>
    <div id=blueScoreContainer class='teamContainer font1'>Cards Left: <span id=blueScore>Blue-Score-Logic-Here</span></div>
    <div id=blueTeamPlayers class='font1 roster whiteText'><span id=blueTeamRoster>Blue-Team-Roster-Here</span></div>    
    <div id=blueTeamLogContainer class='teamLogContainer font1'><h6>Blue Team Clue Log:</h6><span id=blueTeamLog>Blue-Team-Log-Logic-Here</span></div>
</div>

<div id="tableContainer" class="classCenter">
    <div id="mainGameTable" class="classCenter">
        My JavaScript should replace this text with a cool table!
    </div>
</div>

<div id=greenContainer>    
    <div id=greenScoreContainer class='teamContainer font1'>Cards Left: <span id=greenScore>Blue-Score-Logic-Here</span></div>   
    <div id=greenTeamPlayers class='font1 roster whiteText'><span id=greenTeamRoster>Green-Team-Roster-Here</span></div>   
    <div id=greenTeamLogContainer class='teamLogContainer font1'><h6>Green Team Clue Log:</h6><span id=greenTeamLog>Green-Team-Log-Logic-Here</span></div>  
</div>

<div id='currentPlayerNameContainer' class='font1'><span id='currentPlayerDisplay'>Player-Name-Logic-Here</span></div>
<div id='finishTurnButtonContainer'><button id='finishTurnButton' class='font1'>Finish Turn</button></div>
`