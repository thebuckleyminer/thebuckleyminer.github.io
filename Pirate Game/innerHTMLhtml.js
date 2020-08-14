//The purpose of this JavaScript file is to make it possible to have more Dynamic HTML but keep the view and model Javascript Cleaner
///// Game Tutorial Parts
const TutorialPageOne = `
<div id="TutorialPage1">
            <div class="darkTanBackground">
                <div class="helmIMG"></div>
                <div id="WELCOME">
                    <p><strong>Ahoy... um... Welcome To Pirate Island!</strong></p>
                    <hr>
                    <p>Would you like me to teach you the art of recruiting your very own Pirate Crew!?</p>
                </div>
            </div>
            <div class="UniversalNextButtonContainer">
                <button id="Page1Yes" class="UniversalNextButton fontTypeOne">Yes</button>
                <button id="Page1No" class="UniversalNextButton fontTypeOne">No</button>
            </div>
        </div>`

const TutorialPageTwo = `
<div id="TutorialPage2">
            <div class="darkTanBackground">
                <div class="TutorialRow">
                    <div class="Pirate_1 piratePictureLarge"></div>
                    <div class="Pirate_2 piratePicture"></div>
                    <div class="Pirate_3 piratePicture"></div>
                    <div class="Pirate_4 piratePicture"></div>
                    <div class="Pirate_5 piratePicture"></div>
                    <div class="Pirate_6 piratePicture"></div>
                    <div class="Pirate_7 piratePicture"></div>
                    <div class="Pirate_8 piratePicture"></div>
                    <div class="Pirate_9 piratePicture"></div>
                    <div class="Pirate_10 piratePictureSmall"></div>
                </div>
                <div id="PageTwoText">
                    <br>
                    <p><strong>Objective:</strong> Assemble your best crew of fine sailors before the other team does!</p>
                    <hr>                
                </div>
            </div>
            <div class="UniversalNextButtonContainer">
                <button id="Page2Next" class="UniversalNextButton fontTypeTwo">Next</button>
            </div>
        </div>`
const TutorialPageThree =`
<div id="TutorialPage3">
<div class="darkTanBackground">
    <div class="TutorialRow">
        <div class="greenTeamExample exampleTeamPicture"></div>
        <div class="blueTeamExample exampleTeamPicture"></div>
    </div>
    <div id="PageThreeText">
        <br>
        <hr>
        <p><strong>Teams:</strong> This game has two teams: <strong>The Green Team</strong>, and, <strong>The Blue Team</strong>.</p>           
    </div>
</div>
<div class="UniversalNextButtonContainer">
    <button id="Page3Next" class="UniversalNextButton fontTypeTwo">Next</button>
</div>
</div>`
const TutorialPageFour = `
<div id="TutorialPage4">
<div class="darkTanBackground">
    <div class="TutorialRow">
        <div class="blackCardExample exampleCardPicture hoverOne"></div>
        <div class="tanCardExample exampleCardPicture hoverTwo"></div>
        <div class="greenCardExample exampleCardPicture hoverThree"></div>
        <div class="blueCardExample exampleCardPicture hoverFour"></div>
    </div>
    <div id="PageFourText">
        <br>
        <p><strong>Card Types:</strong> There are four card types: <strong>Black</strong>, <strong>Tan</strong>, <strong>Green</strong>,  <strong>and Blue</strong>.</p>
        <hr>
        <p>Twenty-five cards make up the board: Black(1), Tan(7), Green(8 or 9), and Blue(8 or 9).</p>                                    
    </div>
</div>
<div class="UniversalNextButtonContainer">
    <button id="Page4Next" class="UniversalNextButton fontTypeTwo">Next</button>
</div>
</div>`
const TutorialPageFive = `
<div id="TutorialPage5">
    <div class="darkTanBackground">
        <div class="TutorialRow">
            <div class="exampleCardFront_1 exampleCardWordsPicture hoverOne"></div>
            <div class="exampleCardFront_2 exampleCardWordsPicture hoverTwo"></div>
            <div class="exampleCardFront_3 exampleCardWordsPicture hoverThree"></div>
            <div class="exampleCardFront_4 exampleCardWordsPicture hoverFour"></div>
        </div>
        <p>The <strong>First Mate</strong> can only see the top side of the recruit cards. (Tan)</p>
        <hr>
        <div class="TutorialRow">
            <div class="exampleCardBack_1 exampleCardWordsPicture hoverOne"></div>
            <div class="exampleCardBack_2 exampleCardWordsPicture hoverTwo"></div>
            <div class="exampleCardBack_3 exampleCardWordsPicture hoverThree"></div>
            <div class="exampleCardBack_4 exampleCardWordsPicture hoverFour"></div>
        </div>
        <div id="PageFiveText">
            <p>The <strong>Captain</strong> sees the bottom side. (The Crew the recruit will actually join)</p>  
            <hr>           
        </div>
    </div>
    <div class="UniversalNextButtonContainer">
        <button id="Page5Next" class="UniversalNextButton fontTypeTwo">Next</button>
    </div>
</div>`
const TutorialPageSix = `
<div id="TutorialPage6">
    <div class="darkTanBackground">
        <div class="TutorialRow">
            <div class="exampleCardBack_1 exampleCardWordsPicture hoverOne"></div>
            <div class="exampleCardBack_2 exampleCardWordsPicture hoverTwo"></div>
            <div class="exampleCardBack_3 exampleCardWordsPicture hoverThree"></div>
            <div class="exampleCardBack_4 exampleCardWordsPicture hoverFour"></div>
        </div>
        <div id="PageSixText">
            <p>The <strong>Captain</strong> being able to see the back sides of the cards needs to give careful Commands (clues) to the <strong>First Mate</strong> regarding who to go out and recruit. </p>
            <hr>
            <p>The goal of the <strong>Captain</strong> is to give a Command specific enough so the <strong>First Mate</strong> does not recruit the wrong Pirates.</p>
            <hr>
            <p>The Command is a clue with the maximum of two words. The two words are followed by the number of recruit cards the Command is applicable to. The clue may not contain a word displayed on a recruit card.</p>               
        </div>
    </div>
    <div class="UniversalNextButtonContainer">
        <button id="Page6Next" class="UniversalNextButton fontTypeTwo">Next</button>
    </div>
</div>`
const TutorialPageSeven = `
<div id="TutorialPage7">
    <div class="darkTanBackground">
        <div class="TutorialRow">
            <div class="exampleCardFront_1 exampleCardWordsPicture hoverOne"></div>
            <div class="exampleCardFront_2 exampleCardWordsPicture hoverTwo"></div>
            <div class="exampleCardFront_3 exampleCardWordsPicture hoverThree"></div>
            <div class="exampleCardFront_4 exampleCardWordsPicture hoverFour"></div>
        </div>        
        <div id="PageSevenText">
            <hr>
            <p>The <strong>First Mate</strong> is in charge of recruiting based on the <strong>Captain's</strong> Commands. The <strong>First Mate</strong> may recruit any of the twenty five cards that have not been previously recruited. 
            The <strong>First Mate</strong> may recruit up to one more than the <strong>Captain</strong> issued with his Command, as well as the option to play it safe and finish your turn any time.
            </p>
            <hr>
                           
        </div>
    </div>    
    <div class="UniversalNextButtonContainer">
        <button id="Page7Next" class="UniversalNextButton fontTypeTwo">Next</button>
    </div>
</div>`
const TutorialPageEight = `
<div id="TutorialPage8">
    <div class="darkTanBackground">
        <div class="TutorialRow">
            <div class="exampleCardFront_1 exampleCardWordsPicture hoverOne"></div>
            <div class="exampleCardFront_2 exampleCardWordsPicture hoverTwo"></div>
            <div class="exampleCardFront_3 exampleCardWordsPicture hoverThree"></div>
            <div class="exampleCardFront_4 exampleCardWordsPicture hoverFour"></div>
        </div>        
        <div id="PageEightText">
            <ul>
                <li>If the <strong>First Mate</strong> accidentally recruits a Tan recruit card, the person ends up not actually a being Pirate and the turn is over.</li>
                <hr>
                <li>Likewise, if the <strong>First Mate</strong> chooses a card of the other Crew's color, the Pirate will join the other Crew and the recruiting turn is over.</li>
                <hr>
                <li>Ye be warned, if you select the Feared Black Pirate recruit card, the game is instantly over and the other team wins.</li>
                <hr>
                <li>As long as the <strong>First Mate</strong> clicks on their team's color Pirate Cards, they will be able to continue guessing up until the Captains description number plus one.</li>
                <hr>
            </ul>                          
        </div>
    </div>    
    <div class="UniversalNextButtonContainer">
        <button id="Page8Next" class="UniversalNextButton fontTypeTwo">Next</button>
    </div>
</div>`
const TutorialPageNine = `
<div id="TutorialPage9">
    <div class="darkTanBackground">
        <div class="TutorialRow">
            <div class="Pirate_1 piratePictureLarge"></div>
            <div class="Pirate_2 piratePicture"></div>
            <div class="Pirate_3 piratePicture"></div>
            <div class="Pirate_4 piratePicture"></div>
            <div class="Pirate_5 piratePicture"></div>
            <div class="Pirate_6 piratePicture"></div>
            <div class="Pirate_7 piratePicture"></div>
            <div class="Pirate_8 piratePicture"></div>
            <div class="Pirate_9 piratePicture"></div>
            <div class="Pirate_10 piratePictureSmall"></div>
        </div>      
        <div id="PageNineText">
            <p>That is it! You are done with the Tutorial!</p>
            <hr>
            <p><strong>Good Luck!</strong></p>                           
        </div>
    </div>    
    <div class="UniversalNextButtonContainer">
        <button id="Page9Next" class="UniversalNextButton fontTypeTwo">Done!</button>
    </div>
</div>`

///// Other Parts
const StartingWindowDivisions =`
<div id="gameModeButtonWindow"></div>
<div id="newPlayerButtonWindow"></div>
<div id=newPlayerNameFormWindow></div>`

const gameTypeButtonsHTMLstring =`
<h2 class='font1 whiteText oneAndHalfEm'>Do ye wish to embark with one ship or two?</h2>
<button id='twoPlayerGameButton' class = "gameModeButtons newPlayerbutton font1"><s>Not Ready Yet</s></button><span id='orWord'> or </span><button id='fourPlayerGameButton' class = "gameModeButtons newPlayerbutton font1">Four Player Game</button>
<div id=TEMPTESTINGBYPASS> <button id=TEMPTESTINGBYPASSbutton>This is the: "Bypass this name selection with preselected names" Button!</button></div>
`
const buttonsHTMLstring=`
<h1 class='whiteText'>Every successful ship is led by a Captain and a First Mate!</h1>
<div id='playerSelectionButtonContainer'>
    <h2 class='whiteText'> Who do ye wish to be? (Choose your player below) </h2>
    <div id='roleButtonDivision class='classCenter'>
        <button id='BlueCaptainJoinButton' class ='blueButton newPlayerbutton font1'>The Blue Pirate Captain</button>
        <button id='GreenCaptainJoinButton' class ='greenButton newPlayerbutton font1'>The Green Pirate Captain</button>
        <button id='BlueFirstMateJoinButton' class ='blueButton newPlayerbutton font1'>The Blue First Mate</button>
        <button id='GreenFirstMateJoinButton' class ='greenButton newPlayerbutton font1'>The Green First Mate</button>
    </div>       
</div>
<br>
<br>
<h2 class='whiteText'> In this turn based game it is important to not see the other players screen. </h2>
<h2 class='whiteText'> Please inform the next player that it is their turn when your turn is complete. </h2>`

const nameFourmHTMLstring =`
<div id='addPlayerNameForm' >
    <h1 class='whiteText'>What be ye Pirate Name:</h1>
    <input type='text' id='nameTextInput' name='name' autofocus placeholder=' Name' maxlength=32 spellcheck="false">
    <button type='submitButton' class='newPlayerSubmitButton newPlayerbutton font1' id='submitButton' disabled>Submit</button>
</div>`

const mainGameHTMLstring =`
<div id=blueContainer>    
    <div id=blueTeamPlayers class='font1 roster whiteText'><span id=blueTeamRoster>Blue-Team-Roster-Here</span></div>
    <div id=blueScoreContainer class='teamContainerBlue font1 blueBorderBlueTeam'>Cards Left: <span id=blueScore>Blue-Score-Logic-Here</span></div>
    <div id=blueTeamFoundPirates class='foundPiratesContainer font1 blueBorderBlueTeam'><span class="FoundPirates">Found Pirates:</span><br><span id=blueTeamFoundPiratesSpan>Found-Pirate-List-Here</span></div>
</div>

<div id="tableContainer" class="classCenter">
    <div id="mainGameTable" class="classCenter">
        My JavaScript should replace this text with a cool table!
    </div>
</div>

<div id=greenContainer>    
    <div id=greenTeamPlayers class='font1 roster whiteText'><span id=greenTeamRoster>Green-Team-Roster-Here</span></div>
    <div id=greenScoreContainer class='teamContainerGreen font1 greenBorderGreenTeam'>Cards Left: <span id=greenScore>Blue-Score-Logic-Here</span></div>   
    <div id=greenTeamFoundPirates class='foundPiratesContainer font1 greenBorderGreenTeam'><span class="FoundPirates">Found Pirates:</span><br><span id=greenTeamFoundPiratesSpan>Found-Pirate-List-Here</span></div>  
</div>
`
let captainClueHTMLstring=`<input type="text" id="CaptainsClue" name="CaptainsClue" autofocus="" placeholder="Enter Clue Here!" maxlength="20" spellcheck="false">    <select name="dropDownNumberOfCards" class="font1 dropDownNumberOfCards" id="dropDownNumberOfCards">
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

let foundGreenPirateRoleList = ['Quartermaster', 'Navigator', 'Pilot', 'Master Gunner', 'Striker', 'Master', 'Powder Monkey', 'Rigger', 'Cook', 'shark'];
let foundBluePirateRoleList = ['Quartermaster', 'Navigator', 'Pilot', 'Master Gunner', 'Striker', 'Master', 'Powder Monkey', 'Rigger', 'Cook', 'shark'];
