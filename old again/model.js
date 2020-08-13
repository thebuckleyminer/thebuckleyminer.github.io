const gameState = {
    //
    //Card Objects will be placed here.
    //Card Example
    //card_19: {
    //    cardObjectType: "blue"
    //    tileWord: "Surgery"
    //},
    //
    gameModeInfo: {
        'gameMode' : '' ,//'two player' or 'four player'
    },    
    otherInfo: {
        "startingTeam":"blue",
        "currentTurn": ['',''],
        "gameOver":false,
        "greenCardsLeft":3,
        "blueCardsLeft":5,
        "playerRole": "Captain",
        "showBackColorSide":true,
        "showClueInputControls":false,
        'blueFoundList':[],
        'greenFoundList':[],
        "currentGuessAllowance": 1,     
        "blackFlipped":false, 
        "turnOver":false,  
    },    
    blueTeamClueLog: {    
        "runningLog" : []
    },
    greenTeamClueLog: {
        "runningLog" : []
    },
    cardView: {
        'cardViewCaptian': ['b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b'],
        'cardViewAllOthers': ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f'],
        'alreadyClicked': [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    }, 
    playerList:{
        'currentPlayer': ['',[],''],
        'BlueCaptain': {
            'name': "",
            'role': "Captain"
        },
        'BlueFirstMate': {
            'name': "",
            'role': "FirstMate"
        },
        'GreenCaptain' : {
            'name': "",
            'role': "Captain"
        },
        'GreenFirstMate': {
            'name': "",
            'role': "FirstMate"
        },
    },
}