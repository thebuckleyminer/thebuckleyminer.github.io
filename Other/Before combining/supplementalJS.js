const StartingWindowDivisions =`
<div id="gameModeButtonWindow"></div>
<div id="newPlayerButtonWindow"></div>
<div id=newPlayerNameFormWindow></div>`

const gameTypeButtonsHTMLstring =`
<button id='twoPlayerGameButton' class = "gameModeButtons newPlayerbutton">Two Player Game</button> or <button id='fourPlayerGameButton' class = "gameModeButtons newPlayerbutton">Four Player Game</button>`

const buttonsHTMLstring=`
<h1>Each band of Pirates is lead by one Captain and one First Mate</h1>
<div id='playerSelectionButtonContainer'>
    <div id='captainButtonDiv'>
        <button id='BlueCaptainJoinButton' class ='blueButton newPlayerbutton'>Join as The Blue Pirate Captain</button><button id='GreenCaptainJoinButton' class ='greenButton newPlayerbutton'>Join as The Green Pirate Captain</button>
    </div>
    <div id='firstMateButtonDiv'>
        <button id='BlueFirstMateJoinButton' class ='blueButton newPlayerbutton'>Join as The Blue First Mate</button><button id='GreenFirstMateJoinButton' class ='greenButton newPlayerbutton'>Join as The Green First Mate</button>
    </div>        
</div>`

const nameFourmHTMLstring =`
<form id='addPlayerNameForm'>
<h3>What be your Pirate Name?</h3>
<label for='name'>Yer Pirate Name:
    <input type='text' id='name' name='name' autofocus placeholder='Name' maxlength=32>
</label>
<br>
<br>
<button type='submitButton' class='newPlayerSubmitButton newPlayerbutton' id='submitButton' disabled>Submit</button>
</form>`