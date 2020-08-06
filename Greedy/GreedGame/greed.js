class DicePlayer {
    constructor(numberOfDice=6){
        self.numberOfDice = numberOfDice;
        self.points = 0;
    }
    roll(numberToRoll=6) {
        let diceOutput = [];
        for (let i=0;i<self.numberOfDice;i++){diceOutput.push(Math.floor(Math.random()*numberToRoll)+1)};
        return diceOutput;        
    }
}
const gameState = {
    DiceCondensedList:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]], // [dot value,roll again=0 keep=1, rolled this turn = 0 rolled previously = 1, scorenotalreadycounter = 0 score already counted =1]    
    currentTurn: {
        "keptDie":false,
        "turnScore":0,
        "scoreList":["ScoreList",0,0,0,0,0,0],
        "rollPoints":0,
    },    
}
function shakeDice(){
    for(let i=0;i<6;i++){
        if(gameState.DiceCondensedList[i][1]=== 0){gameState.DiceCondensedList[i][0] = Math.floor(Math.random()*6)+1;}
        //if(gameState.DiceCondensedList[i][1]=== 1){gameState.DiceCondensedList[i][2]=1;}
    }
        setRollScoreToZero()
        reRenderDice()
        enableDieEventListeners()
        const firstRollButton = document.getElementById('firstRollButton');
        firstRollButton.removeEventListener("click",shakeDice,false);
        HTMLHider('firstRollButton')
        optionalSortDice()

        
};

function resetAllKeepers(){
    let keptCounter = 0;
    for(let i=0;i<6;i++){if(gameState.DiceCondensedList[i][1]=== 1){keptCounter +=1;}};
    if (keptCounter === 6){
        for(let i=0;i<6;i++){
            gameState.DiceCondensedList[i][0]=0
            gameState.DiceCondensedList[i][1]=0
            gameState.DiceCondensedList[i][2]=0
            gameState.DiceCondensedList[i][3]=0
        }
    }
}

function commitDice(){
    if (verifyAbilityToRoll()){
        for(let i=0;i<6;i++){if(gameState.DiceCondensedList[i][1]=== 1){gameState.DiceCondensedList[i][2]=1;}}
        setRollScoreToZero()
        UpdateScore()
        resetAllKeepers()
        shakeDice()
    }
};

function setRollScoreToZero(){
    HTMLShower('finishTurnZeroButton','inline')
    gameState.currentTurn.rollPoints = 0;
    const userRollScoreSpan = document.getElementById('userRollScoreSpan');
    userRollScoreSpan.innerHTML = 0;
}

function reRenderDice(){
    let ReRollinnerHTML = "";
    let KeepinnerHTML = "";
    let SetAsideKeptHTML ="";
    for(let i=0;i<6;i++){
        if(gameState.DiceCondensedList[i][2]=== 1){SetAsideKeptHTML+= `<div class="dice die`+gameState.DiceCondensedList[i][0]+`" name="`+i+`"></div>`}
        else{
            if(gameState.DiceCondensedList[i][1]=== 0){ReRollinnerHTML+= `<div class="dice die`+gameState.DiceCondensedList[i][0]+`" name="`+i+`"></div>`}
            else if(gameState.DiceCondensedList[i][1]=== 1){KeepinnerHTML+= `<div class="dice die`+gameState.DiceCondensedList[i][0]+`" name="`+i+`"></div>`}
        }
        
    }
    let diceToRoll = document.getElementById('diceToRoll');
    let keptDiceHTML = document.getElementById('keptDiceHTML');
    let previouslyKeptHTML = document.getElementById('previouslyKeptHTML');
    diceToRoll.innerHTML = ReRollinnerHTML;
    keptDiceHTML.innerHTML = KeepinnerHTML;
    previouslyKeptHTML.innerHTML = SetAsideKeptHTML;
    enableDieEventListeners();
};

function enableDieEventListeners() {
    let renderedDie = document.getElementsByClassName("dice");
    for (i=0; i<6; i++){if(gameState.DiceCondensedList[renderedDie[i].attributes["name"].value][2]===0){renderedDie[i].addEventListener("click",DieClickEvent,false)}}
}

function disableDieEventListeners() {
    let renderedDie = document.getElementsByClassName("dice");
    for (i=0; i<6; i++){if(gameState.DiceCondensedList[renderedDie[i].attributes["name"].value][2]===0){renderedDie[i].removeEventListener("click",DieClickEvent,false)}}
}
function DieClickEvent(event){
    let gameStateIndex =this.attributes["name"].value;
    if(gameState.DiceCondensedList[gameStateIndex][1]=== 0){gameState.DiceCondensedList[gameStateIndex][1]=1}
    else if(gameState.DiceCondensedList[gameStateIndex][1]=== 1){gameState.DiceCondensedList[gameStateIndex][1]=0};  
    turnScoreUpdater() 
    reRenderDice();
    disableDieEventListeners();
    enableDieEventListeners();
    CheckToEnableNewTurnButton();
}

const chooseToKeepButton = document.getElementById('chooseToKeepButton');
chooseToKeepButton.addEventListener("click",commitDice,false)

function CheckToEnableNewTurnButton(){
    for(let i=0;i<6;i++){
        if(gameState.currentTurn.keptDie===false){
            if(gameState.DiceCondensedList[i][2]=== 0){if(gameState.DiceCondensedList[i][1]=== 1){gameState.currentTurn.keptDie===true;}}
        }
    }
    const firstRollButton = document.getElementById('firstRollButton');
    firstRollButton.addEventListener("click",shakeDice,false);
}

function UpdateScore(){
    gameState.currentTurn.scoreList=["ScoreList",0,0,0,0,0,0];
    for(let i=0;i<6;i++){
        if(gameState.DiceCondensedList[i][3]=== 0){
            if(gameState.DiceCondensedList[i][1]=== 1){
                gameState.currentTurn.scoreList[gameState.DiceCondensedList[i][0]] += 1;
                gameState.DiceCondensedList[i][3]=1;
            }
        }
    };
    let i = gameState.currentTurn.scoreList;
    let confirmedTally = 0;
    if(i[1]===6||i[2]===6||i[3]===6||i[4]===6||i[5]===6||i[6]===6){confirmedTally+=100000000}
    else if(i[1]===1&&i[2]===1&&i[3]===1&&i[4]===1&&i[5]===1&i[6]===1){confirmedTally+= 1500}
    else{
        if(i[1]>=3){confirmedTally+= 1000+(i[1]%3*100)} else{confirmedTally+=i[1]*100}
        if(i[2]>=3){confirmedTally+= 200}
        if(i[3]>=3){confirmedTally+= 300}
        if(i[4]>=3){confirmedTally+= 400}
        if(i[5]>=3){confirmedTally+= 500+(i[5]%3*50)} else{confirmedTally+=i[5]*50}
        if(i[6]>=3){confirmedTally+= 600}
    }
    gameState.currentTurn.turnScore += confirmedTally;
    gameState.currentTurn.scoreList=["ScoreList",0,0,0,0,0,0];
    const userScoreSpan = document.getElementById('userScoreSpan');
    userScoreSpan.innerHTML = gameState.currentTurn.turnScore;
}




function verifyAbilityToRoll(){if (gameState.currentTurn.rollPoints !== 0 ){return true};}





function turnScoreUpdater(){
    gameState.currentTurn.scoreList=["ScoreList",0,0,0,0,0,0];
    for(let i=0;i<6;i++){
        if(gameState.DiceCondensedList[i][3]=== 0){
            if(gameState.DiceCondensedList[i][1] === 1){
                gameState.currentTurn.scoreList[gameState.DiceCondensedList[i][0]] += 1;
                
    }}};
    let i = gameState.currentTurn.scoreList;

    let tempScore = 0;
    if(i[1]===6||i[2]===6||i[3]===6||i[4]===6||i[5]===6||i[6]===6){tempScore+=100000000}
    else if(i[1]===1&&i[2]===1&&i[3]===1&&i[4]===1&&i[5]===1&i[6]===1){tempScore+= 1500}
    else{
        if(i[1]>=3){tempScore+= 1000+(i[1]%3*100)} else{tempScore+=i[1]*100}
        if(i[2]>=3){tempScore+= 200}
        if(i[3]>=3){tempScore+= 300}
        if(i[4]>=3){tempScore+= 400}
        if(i[5]>=3){tempScore+= 500+(i[5]%3*50)} else{tempScore+=i[5]*50}
        if(i[6]>=3){tempScore+= 600}
    }
    const userRollScoreSpan = document.getElementById('userRollScoreSpan');
    userRollScoreSpan.innerHTML = tempScore;
    gameState.currentTurn.rollPoints = tempScore;
    HTMLHider('finishTurnZeroButton')
}




function HTMLHider(idString){
    let tempVariale = document.getElementById(idString);
    tempVariale.style.display = "none"
}
function HTMLShower(idString,displayTypeString){
    let tempVariale = document.getElementById(idString);
    tempVariale.style.display = displayTypeString;
}

function optionalSortDice(){
    HTMLShower("optionalSortButton","inline")
    const optionalSortButton = document.getElementById('optionalSortButton');
    optionalSortButton.addEventListener("click",optionalSortButtonAction,false)
    function optionalSortButtonAction(){
        gameState.DiceCondensedList.sort();
        reRenderDice();
        console.log("done");
        
    }
}




HTMLHider("optionalSortButton")
CheckToEnableNewTurnButton()


//[dot value,roll again=0 keep=1, rolled this turn = 0 rolled previously = 1, scorenotalreadycounter = 0 score already counted =1]    
