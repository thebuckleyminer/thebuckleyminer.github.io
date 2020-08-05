zebras = [DotValue,dieID,ActivalySelected,KeptPool,worthPointsThisRoll];//ID Second So sorting will be easy by first value

function diceMaker(numberToMake=6){
    for(i=0;i>numberToMake;i++){
        console.log(i)
    }
}



function rollDice(){

}


[0,0,0]//[selectedScore, turnScore, gameScore]

let rules =
`
You have to have 500pts to be "On the Board"

if all 6 dice are counters you may roll again.

You may finish your turn any time you roll points

If you roll and there are no points, then your turn is over and you have zero.
If you roll and there are points, you may choose to keep them and end your turn, or keep them and keep rolling.

You must keep at least one die every roll to continue rolling or get points.
`

[DotValue,dieID,ActivalySelected,KeptPool,worthPointsThisRoll]//ID Second So sorting will be easy by first value
//[1-6,0-5+,T or F, T or F, T or F]
if(zebras[4] === true)





//[6,4,true,true,true]

//if(zebras[])


let diceTally = ["firstIndex",0,0,0,0,0,0]//Keeps a tally of dice
let selectedDiceTally = ["firstIndex",0,0,0,0,0,0]//Keeps a tally of how many have been clicked to prohibit selecting too many

for(let i=0;i<6;i++){ if(zebras[3] === false){ diceTally[zebras[0]] += 1; } } //updated the diceTally with how many of each



      





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