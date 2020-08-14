
// Update if player gets all siz
//InmplementPlayers
//Make it look nice
//cant select like 2 threes if there are three or more (only on 2,3,4,and 6)
// replace "gamestatePLACEHOLDER" with actuall gamestate


let gamestatePLACEHOLDER = [];//[DotValue,dieID,ActivalySelected,KeptPool,worthPointsThisRoll];//ID Second So sorting will be easy by first value
let UserScore = [0,0,0];//[selectedScore, turnScore, gameScore]
let selectedDiceTally = ["firstIndex",0,0,0,0,0,0];//Keeps a tally of how many have been clicked to prohibit selecting too many

function generateDice(NumberOfDice=6){ for(let i=0; i<NumberOfDice; i++){ gamestatePLACEHOLDER.push([0,0,0,0,0]) } }

function newGame(){
    gamestatePLACEHOLDER = []
    UserScore = [0,0,0]
    selectedDiceTally = ["firstIndex",0,0,0,0,0,0]
    generateDice()
    startingButtonVisibility()
}
function nextPlayersTurn(){
    gamestatePLACEHOLDER = []
    selectedDiceTally = ["firstIndex",0,0,0,0,0,0]
    generateDice()
    startingButtonVisibility()
}
function randNum0to6(){return Math.floor(Math.random()*6)+1}

function rollDice(optionString){
    selectedDiceTally = ["firstIndex",0,0,0,0,0,0]
    if(optionString ==="all"){
        for(let i=0;i<6;i++){
            gamestatePLACEHOLDER[i][0] = randNum0to6();
            gamestatePLACEHOLDER[i][1] = i;
            gamestatePLACEHOLDER[i][2] = false;
            gamestatePLACEHOLDER[i][3] = false;
            gamestatePLACEHOLDER[i][4] = false;
        }
    }
    else if(optionString ==="some"){        
        for(let i=0;i<6;i++){
            if(gamestatePLACEHOLDER[i][3] === false){
                gamestatePLACEHOLDER[i][0] = randNum0to6();
                gamestatePLACEHOLDER[i][1] = i;
                gamestatePLACEHOLDER[i][2] = false;
                gamestatePLACEHOLDER[i][3] = false;
                gamestatePLACEHOLDER[i][4] = false;
            }
        }
    }
    gamestatePLACEHOLDER.sort()
    RenderDice()
}
function RenderDice(){
    let diceHTMLSection1 = "";
    let diceHTMLSection2 = "";
    let diceHTMLSection3 = "";
    for(let i=0;i<6;i++){
        if(gamestatePLACEHOLDER[i][3]===true){diceHTMLSection3 +=`<div class="dice die`+gamestatePLACEHOLDER[i][0]+`" name="`+i+`"></div>`}
        else{
            if(gamestatePLACEHOLDER[i][2]===true){diceHTMLSection2 +=`<div class="dice die`+gamestatePLACEHOLDER[i][0]+`" name="`+i+`"></div>`}
            else if (gamestatePLACEHOLDER[i][2]===false){diceHTMLSection1 +=`<div class="dice die`+gamestatePLACEHOLDER[i][0]+`" name="`+i+`"></div>`}
        }
    }
    cwHtmlInserter("diceDisplaySection1",diceHTMLSection1)
    cwHtmlInserter("diceDisplaySection2",diceHTMLSection2)
    cwHtmlInserter("diceDisplaySection3",diceHTMLSection3)
    enableDieEventListeners();
}

function generateDiceTally(){
    let diceTally = ["DiceTallyList",0,0,0,0,0,0]; //Keeps a tally of dice
    for(let i=0;i<6;i++){ if(gamestatePLACEHOLDER[i][3] === false){ diceTally[gamestatePLACEHOLDER[i][0]] += 1; } }; //updated the diceTally with how many of each
    return diceTally
}
function calculateScore(diceTally){
    let maxSelectable = [0,0,0,0,0,0,0] //index = is the score
    let i = diceTally;
    let diceMathScore = 0;
    if(i[1]===6||i[2]===6||i[3]===6||i[4]===6||i[5]===6||i[6]===6){diceMathScore+=100000000}
    else if(i[1]===1&&i[2]===1&&i[3]===1&&i[4]===1&&i[5]===1&&i[6]===1){
        diceMathScore+= 1500,maxSelectable[1]=1,maxSelectable[2]=1,maxSelectable[3]=1,maxSelectable[4]=1,maxSelectable[5]=1,maxSelectable[6]=1
    }
    else{
        if(i[1]>=3){diceMathScore += 1000+((i[1]%3)*100),maxSelectable[1]=3 + i[1]%3}
        else{diceMathScore += i[1]*100,maxSelectable[1]=i[1]}
        if(i[2]>=3){diceMathScore += 200,maxSelectable[2]=3}
        if(i[3]>=3){diceMathScore += 300,maxSelectable[3]=3}
        if(i[4]>=3){diceMathScore += 400,maxSelectable[4]=3}
        if(i[5]>=3){diceMathScore += 500+((i[5]%3)*50),maxSelectable[5]= 3 + i[5]%3}
        else{diceMathScore += i[5]*50,maxSelectable[5]=i[5]}
        if(i[6]>=3){diceMathScore += 600,maxSelectable[6]=3}
    }
    maxSelectable[0] = diceMathScore;
    return maxSelectable
}
function updateTurnScoreOnClick(){
    UserScore[0] = 0;
    let diceTally = ["DiceTallyList",0,0,0,0,0,0]; //Keeps a tally of dice
    for(let i=0;i<6;i++){ if(gamestatePLACEHOLDER[i][2] === true){ diceTally[gamestatePLACEHOLDER[i][0]] += 1; } }; //updated the diceTally with how many of each
    let ClickedScore = calculateScore(diceTally)[0]
    UserScore[0] = ClickedScore;
}


function turnOverUserScoreUpdater(){
    UserScore[1] += UserScore[0]
    UserScore[2] += UserScore[1];
    UserScore[0] = 0;
    UserScore[1] = 0;
    updateScoreSpans()
}

function updateScoreSpans() {
    cwHtmlInserter("score1",UserScore[0]);
    cwHtmlInserter("score2",UserScore[1]);
    cwHtmlInserter("score3",UserScore[2]);
}






// Functions for dice clicking
function enableDieEventListeners() {
    let renderedDie = document.getElementsByClassName("dice");
    for (i=0; i<6; i++){if(gamestatePLACEHOLDER[renderedDie[i].attributes["name"].value][3]===false){renderedDie[i].addEventListener("click",whenDieClicked,false)}}
}
function disableDieEventListeners() {
    let renderedDie = document.getElementsByClassName("dice");
    for (i=0; i<6; i++){if(gamestatePLACEHOLDER[renderedDie[i].attributes["name"].value][3]===false){renderedDie[i].removeEventListener("click",whenDieClicked,false)}}
}
function whenDieClicked(event){
    let indexNumber = parseInt(this.attributes["name"].value)
    let i = gamestatePLACEHOLDER[indexNumber][0];
    let maxSelectable = calculateScore(generateDiceTally(gamestatePLACEHOLDER));//example of running the functions
    if (gamestatePLACEHOLDER[indexNumber][2] === true) {gamestatePLACEHOLDER[indexNumber][2] = false,selectedDiceTally[i] -= 1;}
    else if (gamestatePLACEHOLDER[indexNumber][2] === false) {gamestatePLACEHOLDER[indexNumber][2] = true,selectedDiceTally[i] += 1;}
    
    if (selectedDiceTally[i] > maxSelectable[i]){
        gamestatePLACEHOLDER[indexNumber][2] = false
        selectedDiceTally[i] -= 1;
        console.log("Please Click on a 'Counter' This Does Not Have Value")//REPLACE if you want with an actual output
    }
    updateTurnScoreOnClick()
    RenderDice()
    updateScoreSpans()
    changeButtonVisibility()
}

// My functions to make code cleaner
function cwHtmlInserter(elementIDString,stringOfHTMLtoInsert){
    let tempFunctionVariable = document.getElementById(elementIDString);
    tempFunctionVariable.innerHTML = stringOfHTMLtoInsert;
}
function cwHtmlWiper(elementIDString){
    let tempFunctionVariable = document.getElementById(elementIDString);
    tempFunctionVariable.innerHTML = '';
}
function cwHtmlDisplay(elementIDString,displayTypeString){
    let tempFunctionVariable = document.getElementById(elementIDString);
    tempFunctionVariable.style.display = displayTypeString;
}
function cwHtmlHide(elementIDString){
    let tempFunctionVariable = document.getElementById(elementIDString);
    tempFunctionVariable.style.display = "none";
}
function cwHtmlDisableButton(elementIDString){
    let tempFunctionVariable = document.getElementById(elementIDString);
    tempFunctionVariable.style.display = "none";
}
function cwHtmlDisableButton(buttonIDString){
    let tempFunctionVariable = document.getElementById(elementIDString);
    tempFunctionVariable.disabled = true;
}
function cwHtmlEnableButton(buttonIDString){
    let tempFunctionVariable = document.getElementById(elementIDString);
    tempFunctionVariable.disabled = false;
}
const changableEndButton = document.getElementById("finishTurnWithoutPoints");
function startingButtonVisibility(){
    cwHtmlDisplay("firstRollButton","inline")
    cwHtmlHide("rollDiceButton")
    cwHtmlHide("finishTurnWithPoints")
    cwHtmlHide("finishTurnWithoutPoints")
    cwHtmlHide("rollAllSixDiceButton")
}
function allSixKeepersButtonVisibility(){
    cwHtmlDisplay("finishTurnWithPoints","inline")
    cwHtmlDisplay("rollAllSixDiceButton","inline")
    cwHtmlHide("rollDiceButton")
    cwHtmlHide("firstRollButton")
    cwHtmlHide("finishTurnWithoutPoints")
}
function tooGreedyButtonVisibility(){
    changableEndButton.innerHTML = "Turn over No Points";
    cwHtmlDisplay("finishTurnWithoutPoints","inline")
    cwHtmlHide("finishTurnWithPoints")
    cwHtmlHide("rollAllSixDiceButton")
    cwHtmlHide("rollDiceButton")
    cwHtmlHide("firstRollButton")
}
function canEndTurnOrRollButtonVisibility(){
    cwHtmlDisplay("finishTurnWithPoints","inline")
    cwHtmlDisplay("rollDiceButton","inline")
    cwHtmlHide("rollAllSixDiceButton")
    cwHtmlHide("firstRollButton")
    cwHtmlHide("finishTurnWithoutPoints")
}
function need500PointsFirst(){
    cwHtmlDisplay("finishTurnWithoutPoints","inline")
    cwHtmlHide("finishTurnWithPoints")
    cwHtmlHide("rollAllSixDiceButton")
    cwHtmlHide("rollDiceButton")
    cwHtmlHide("firstRollButton")
}
function need500ToBeOnBoardButtonVisibility(){
    
    cwHtmlDisplay("rollDiceButton","inline")
    cwHtmlHide("finishTurnWithPoints")
    cwHtmlHide("rollAllSixDiceButton")
    cwHtmlHide("firstRollButton")
    cwHtmlHide("finishTurnWithoutPoints")
}
function changeButtonVisibility(){
    if (UserScore[0] === 0){tooGreedyButtonVisibility()}
    else{
        let tempVariable = 0;
        for (i=0; i<6; i++){if(gamestatePLACEHOLDER[i][3]===true||gamestatePLACEHOLDER[i][2]===true){tempVariable+=1}
        if (tempVariable===6){allSixKeepersButtonVisibility()}
        else{if(UserScore[2]<500 && ((UserScore[0]+UserScore[1])<500)){need500ToBeOnBoardButtonVisibility()} else{canEndTurnOrRollButtonVisibility()}}
        }
    }
}

const firstRollButton = document.getElementById("firstRollButton");
const rollDiceButton = document.getElementById("rollDiceButton");
const rollAllSixDiceButton = document.getElementById("rollAllSixDiceButton");
const finishTurnWithPoints = document.getElementById("finishTurnWithPoints");
const finishTurnWithoutPoints = document.getElementById("finishTurnWithoutPoints");

firstRollButton.addEventListener("click",firstRollButtonPressed,false);
rollDiceButton.addEventListener("click",keepAndRollAgainPressed,false);
rollAllSixDiceButton.addEventListener("click",KeepAndRollAgainAfterAllSixCounters,false);
finishTurnWithPoints.addEventListener("click",keepAndFinishTurnPressed,false);
finishTurnWithoutPoints.addEventListener("click",lostEverythingNextTurn,false);

function firstRollButtonPressed(){
    rollDice("all")
    changeButtonVisibility()

}
function keepAndRollAgainPressed(){
    UserScore[1] += UserScore[0];
    UserScore[0] = 0;
    updateScoreSpans();
    for(let i=0;i<6;i++){
        if (gamestatePLACEHOLDER[i][2] === true){gamestatePLACEHOLDER[i][3] = true;gamestatePLACEHOLDER[i][2]=false}
    }
    rollDice("some")
    changeButtonVisibility()
}
function keepAndFinishTurnPressed(){
    turnOverUserScoreUpdater()
    cwHtmlWiper("diceDisplaySection1")
    cwHtmlWiper("diceDisplaySection2")
    cwHtmlWiper("diceDisplaySection3")
    nextPlayersTurn()
    updateScoreSpans()
    
}
function lostEverythingNextTurn(){
    UserScore[1] = 0
    console.log("LOST!!!!")
    updateScoreSpans()
    cwHtmlWiper("diceDisplaySection1")
    cwHtmlWiper("diceDisplaySection2")
    cwHtmlWiper("diceDisplaySection3")
    nextPlayersTurn()
}
function KeepAndRollAgainAfterAllSixCounters(){
    UserScore[1] += UserScore[0];
    UserScore[0] = 0;
    rollDice("all")
    changeButtonVisibility()
    updateScoreSpans()
}




newGame()