$("#attack-btn").hide();
$(".gameText").hide();
$("#reset").hide();
$("#gameOverText").hide();
$("#youWinText").hide();

var yourChar;
var charChosen;
var charSelected = false;
var yourOp;
var defChosen;
var defSelected = false;
var wins = 0;

//assign attack hp and counterAttack to each character
var charObject = {
    char1: [{attack: 18, hp: 150, counterAttack: 9}],
    char2: [{attack: 1, hp: 100, counterAttack: 5}],
    char3: [{attack: 22, hp: 200, counterAttack: 18}],
    char4: [{attack: 12, hp: 250, counterAttack: 15}]
};

$(document).ready(function () {
    
    //displays the characters health
    $("#char1Health").html(charObject.char1[0].hp);
    $("#char2Health").html(charObject.char2[0].hp);
    $("#char3Health").html(charObject.char3[0].hp);
    $("#char4Health").html(charObject.char4[0].hp);
    
});

//select your character and then move other characters into the defender section
$(".charContainer").on("click", function () {
    debugger;
    $(".gameText").show();
    $("#selectChar").hide();
    
    if (charSelected === false) {
        yourChar = this.id;
        console.log(yourChar);
        charChosen = yourChar;
        charSelected = true;
        
        if (charChosen === yourChar) {
            
            //have selected character move into attack zone
            $("#" + yourChar).removeClass("charContainer").addClass("selectedCharContainer").appendTo("#yourChar");
            
            //assigns the value from charObject to charChosen
            charChosen = charObject[charChosen];
            console.log(charChosen);
        }
        //move remaining characters into defenders selection area
        $(".charContainer").removeClass("charContainer").addClass("defenderContainer").appendTo("#defenders");
    }
    // Event Delegation
    else {
        console.log("defender chosen");
      
        //select your opponent
        $(document).on("click", ".defenderContainer", function () {
            if (defSelected === false) {
                yourOp = this.id
                console.log(yourOp);
                defChosen = yourOp;
                defSelected = true;
                
                if (defChosen === yourOp) {
                    
                    //have selected enemy move into the opponent area
                    $("#" + yourOp).appendTo("#opponent");
                    
                    //assigns the value from charObject to defChosen
                    defChosen = charObject[defChosen];
                    
                    console.log(defChosen);
                    $("#attack-btn").show();
                }
            }
        });
    }
    
    
});

$("#attack-btn").on("click", function () {
    if ((charSelected !== true) || (defSelected !== true)) {
        console.log("there's no opponent yet");
    }
    else if ((charSelected === true) && (defSelected === true)) {
        
        //charChosen attacks defChosen
        defChosen[0].hp -= charChosen[0].attack;
        $("#defender-area").find(".health").html(defChosen[0].hp);
        
        //charChosen has it's attack power increased
        charChosen[0].attack += charChosen[0].attack;
        console.log(charChosen[0].attack + " this is the added attack power");
        
        
        if (defChosen[0].hp >= 0) {
            //defChosen counterattacks charChosen
            charChosen[0].hp -= defChosen[0].counterAttack;
            $(".selectedCharContainer").find(".health").html(charChosen[0].hp);
        }
        
        if ((defChosen[0].hp <= 0)) {
            defSelected = false;
            $("#opponent").find(".defenderContainer").hide();
            wins++;
        }
        else if (charChosen[0].hp <= 0) {
            charSelected = false;
            $("#selection-area").hide();
            $("#attack-btn").hide();
            $("#attack-area").hide();
            $(".gameText").hide();
            $("#defender-area").hide();
            $("#defenders-selection").hide();
            $("#gameOverText").show();
            $("#reset").show();
        }
        if (wins === 3) {
            charSelected = false;
            $("#selection-area").hide();
            $("#attack-btn").hide();
            $("#attack-area").hide();
            $(".gameText").hide();
            $("#defender-area").hide();
            $("#defenders-selection").hide();
            $("#gameOverText").show();
            $("#reset").show();
        }
    }
    
});

$("#reset").on("click", function () {
    yourChar = undefined;
    charChosen = undefined;
    charSelected = false;
    yourOp = undefined;
    defChosen = undefined;
    defSelected = false;
    wins = 0;
    charObject = {
        char1: [{attack: 18, hp: 150, counterAttack: 9}],
        char2: [{attack: 1, hp: 100, counterAttack: 5}],
        char3: [{attack: 22, hp: 200, counterAttack: 18}],
        char4: [{attack: 12, hp: 250, counterAttack: 15}]
    };
    $("#selection-area").show();
    $("#selectChar").show();
    $("#opponent").find(".defenderContainer").show();
    $("#char1").removeClass().addClass("charContainer").appendTo("#selection-area");
    $("#char2").removeClass().addClass("charContainer").appendTo("#selection-area");
    $("#char3").removeClass().addClass("charContainer").appendTo("#selection-area");
    $("#char4").removeClass().addClass("charContainer").appendTo("#selection-area");
    $("#char1Health").html(charObject.char1[0].hp);
    $("#char2Health").html(charObject.char2[0].hp);
    $("#char3Health").html(charObject.char3[0].hp);
    $("#char4Health").html(charObject.char4[0].hp);
    $("#attack-area").show();
    $("#defender-area").show();
    $("#defenders-selection").show();
    $("#gameOverText").hide();
    $("#reset").hide();
});

    

