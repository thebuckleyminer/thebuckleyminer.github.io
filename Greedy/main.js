//REPLACE_ME!!!    look for and replace these
let zebras = [];//[DotValue,dieID,ActivalySelected,KeptPool,worthPointsThisRoll];//ID Second So sorting will be easy by first value
let UserScore = [0,0,0];//[selectedScore, turnScore, gameScore]
let selectedDiceTally = ["firstIndex",0,0,0,0,0,0];//Keeps a tally of how many have been clicked to prohibit selecting too many

function generateDice(NumberOfDice=6){ for(let i=0; i<NumberOfDice; i++){ zebras.push([0,0,0,0,0]) } }

function newGame(){
    zebras = []
    UserScore = [0,0,0]
    selectedDiceTally = ["firstIndex",0,0,0,0,0,0]
    generateDice()
    startingButtonVisibility()
}

function randNum0to6(){return Math.floor(Math.random()*6)+1}

function rollDice(optionString){
    selectedDiceTally = ["firstIndex",0,0,0,0,0,0]
    cwHtmlDisplay("sortDiceButton","inline")
    if(optionString ==="all"){
        for(let i=0;i<6;i++){
            zebras[i][0] = randNum0to6();
            zebras[i][1] = i;
            zebras[i][2] = false;
            zebras[i][3] = false;
            zebras[i][4] = false;
        }
    }
    else if(optionString ==="some"){        
        for(let i=0;i<6;i++){
            if(zebras[i][3] === false){
                zebras[i][0] = randNum0to6();
                zebras[i][1] = i;
                zebras[i][2] = false;
                zebras[i][3] = false;
                zebras[i][4] = false;
            }
        }
    }
    RenderDice()
}
function RenderDice(){
    let diceHTMLSection1 = "";
    let diceHTMLSection2 = "";
    let diceHTMLSection3 = "";
    for(let i=0;i<6;i++){
        if(zebras[i][3]===true){diceHTMLSection3 +=`<div class="dice die`+zebras[i][0]+`" name="`+i+`"></div>`}
        else{
            if(zebras[i][2]===true){diceHTMLSection2 +=`<div class="dice die`+zebras[i][0]+`" name="`+i+`"></div>`}
            else if (zebras[i][2]===false){diceHTMLSection1 +=`<div class="dice die`+zebras[i][0]+`" name="`+i+`"></div>`}
        }
    }
    cwHtmlInserter("diceDisplaySection1",diceHTMLSection1)
    cwHtmlInserter("diceDisplaySection2",diceHTMLSection2)
    cwHtmlInserter("diceDisplaySection3",diceHTMLSection3)
    enableDieEventListeners();
}

function generateDiceTally(){
    let diceTally = ["DiceTallyList",0,0,0,0,0,0]; //Keeps a tally of dice
    for(let i=0;i<6;i++){ if(zebras[i][3] === false){ diceTally[zebras[i][0]] += 1; } }; //updated the diceTally with how many of each
    return diceTally
}
function calculateScore(diceTally){
    let maxSelectable = [0,0,0,0,0,0,0] //index = is the score
    let i = diceTally;
    let diceMathScore = 0;
    if(i[1]===6||i[2]===6||i[3]===6||i[4]===6||i[5]===6||i[6]===6){diceMathScore+=100000000}
    else if(i[1]===1&&i[2]===1&&i[3]===1&&i[4]===1&&i[5]===1&i[6]===1){diceMathScore+= 1500}
    else{
        if(i[1]>=3){diceMathScore += 1000+((i[1]%3)*100),maxSelectable[1]=3 + i[1]%3}
        else{diceMathScore += i[1]*100,maxSelectable[1]=i[1]}
        if(i[2]>=3){diceMathScore += 200,maxSelectable[2]=3}
        if(i[3]>=3){diceMathScore += 300,maxSelectable[3]=3}
        if(i[4]>=3){diceMathScore += 400,maxSelectable[4]=3}
        if(i[5]>=3){diceMathScore += 500+((i[5]%3)*50),maxSelectable[5]= 3 + i[1]%3}
        else{diceMathScore += i[5]*50,maxSelectable[5]=i[5]}
        if(i[6]>=3){diceMathScore += 600,maxSelectable[6]=3}
    }
    maxSelectable[0] = diceMathScore;
    return maxSelectable
}
function updateTurnScoreOnClick(){
    UserScore[0] = 0;
    let diceTally = ["DiceTallyList",0,0,0,0,0,0]; //Keeps a tally of dice
    for(let i=0;i<6;i++){ if(zebras[i][2] === true){ diceTally[zebras[i][0]] += 1; } }; //updated the diceTally with how many of each
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
    for (i=0; i<6; i++){if(zebras[renderedDie[i].attributes["name"].value][3]===false){renderedDie[i].addEventListener("click",whenDieClicked,false)}}
}
function disableDieEventListeners() {
    let renderedDie = document.getElementsByClassName("dice");
    for (i=0; i<6; i++){if(zebras[renderedDie[i].attributes["name"].value][3]===false){renderedDie[i].removeEventListener("click",whenDieClicked,false)}}
}
function whenDieClicked(event){
    let indexNumber = parseInt(this.attributes["name"].value)
    let i = zebras[indexNumber][0];
    let maxSelectable = calculateScore(generateDiceTally(zebras));//example of running the functions
    if (zebras[indexNumber][2] === true) {zebras[indexNumber][2] = false,selectedDiceTally[i] -= 1;}
    else if (zebras[indexNumber][2] === false) {zebras[indexNumber][2] = true,selectedDiceTally[i] += 1;}
    
    if (selectedDiceTally[i] > maxSelectable[i]){
        zebras[indexNumber][2] = false
        selectedDiceTally[i] -= 1;
        console.log("Please Click on a 'Counter' This Does Not Have Value")//REPLACE_ME!!! Message Output, sorry can only select counters
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


function startingButtonVisibility(){
    cwHtmlDisplay("firstRollButton","inline")

    cwHtmlHide("rollDiceButton")
    cwHtmlHide("sortDiceButton")
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



const firstRollButton = document.getElementById("firstRollButton");
const sortDiceButton = document.getElementById("sortDiceButton");
const rollDiceButton = document.getElementById("rollDiceButton");
const rollAllSixDiceButton = document.getElementById("rollAllSixDiceButton");
const finishTurnWithPoints = document.getElementById("finishTurnWithPoints");
const finishTurnWithoutPoints = document.getElementById("finishTurnWithoutPoints");


firstRollButton.addEventListener("click",firstRollButtonPressed,false);
sortDiceButton.addEventListener("click",SortDiceButtonPress,false);
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
        if (zebras[i][2] === true){zebras[i][3] = true;zebras[i][2]=false}
    }
    rollDice("some")
    changeButtonVisibility()
}

function keepAndFinishTurnPressed(){
    turnOverUserScoreUpdater()
    
    //REPLACE_ME!!! NEXT turn logic here
}
function lostEverythingNextTurn(){
    console.log("LOST!!!!")
    //REPLACE_ME!!! NEXT turn logic here
}

function SortDiceButtonPress(){
        zebras.sort();
        RenderDice()
        cwHtmlHide("sortDiceButton")
}

function KeepAndRollAgainAfterAllSixCounters(){
    UserScore[1] += UserScore[0];
    UserScore[0] = 0;
    rollDice("all")
    changeButtonVisibility()
}




newGame()





//must have 500 to get on board
//cant select like 2 threes if there are three or more




function changeButtonVisibility(){
    if (UserScore[0] === 0){tooGreedyButtonVisibility()}
    else{
        let tempVariable = 0;
        for (i=0; i<6; i++){if(zebras[i][3]===true||zebras[i][2]===true){tempVariable+=1}
        if (tempVariable===6){allSixKeepersButtonVisibility()}
        else{canEndTurnOrRollButtonVisibility()}
        }
    }
}


/*
zebras = [DotValue,dieID,ActivalySelected,KeptPool,worthPointsThisRoll];//ID Second So sorting will be easy by first value
for(let i=0;i<6;i++){ if(zebras[i][3] === false){ diceTally[zebras[i][0]] += 1; } }; //updated the diceTally with how many of each
let UserScore = [0,0,0];//[selectedScore, turnScore, gameScore]





cwHtmlHide("firstRollButton")
cwHtmlHide("rollDiceButton")
cwHtmlHide("sortDiceButton")
cwHtmlHide("finishTurnWithPoints")
cwHtmlHide("finishTurnWithoutPoints")
cwHtmlHide("rollAllSixDiceButton")

cwHtmlDisplay("firstRollButton","inline")
cwHtmlDisplay("rollDiceButton","inline")
cwHtmlDisplay("sortDiceButton","inline")
cwHtmlDisplay("finishTurnWithPoints","inline")
cwHtmlDisplay("finishTurnWithoutPoints","inline")
cwHtmlDisplay("rollAllSixDiceButton","inline")
*/

let rules =
`
You have to have 500pts to be "On the Board"

if all 6 dice are counters you may roll again.

You may finish your turn any time you roll points

If you roll and there are no points, then your turn is over and you have zero.
If you roll and there are points, you may choose to keep them and end your turn, or keep them and keep rolling.

You must keep at least one die every roll to continue rolling or get points.
`