$("#attack-btn").hide();
$(".gameText").hide();
$("#reset").hide();

$(document).ready( function() {
    var charChosen;
    var charSelected = false;
    var defChosen;
    var defSelected = false;
    
    //assign attack hp and counterAttack to each character
    var charObject = {
        char1: [{attack: 18, hp: 150, counterAttack: 9}],
        char2: [{attack: 8, hp: 100, counterAttack: 5}],
        char3: [{attack: 22,  hp: 200,  counterAttack: 18}],
        char4: [{attack: 12,  hp: 250, counterAttack: 15}]
    };
    
    //reset function
    // function reset() {
    //     charChosen;
    //     charSelected = false;
    //     defChosen;
    //     defSelected = false;
    //     $("#char1Health").html(charObject.char1[0].hp);
    //     $("#char2Health").html(charObject.char2[0].hp);
    //     $("#char3Health").html(charObject.char3[0].hp);
    //     $("#char4Health").html(charObject.char4[0].hp);
    // }
    
    //displays the characters health
    $("#char1Health").html(charObject.char1[0].hp);
    $("#char2Health").html(charObject.char2[0].hp);
    $("#char3Health").html(charObject.char3[0].hp);
    $("#char4Health").html(charObject.char4[0].hp);
    
    //select your character and then move other characters into the defender section
        $(".charContainer").on("click", function () {
            $(".gameText").show();
            $("#selectChar").hide();
            if (charSelected === false) {
                var yourChar = this.id;
                charChosen = yourChar;
                charSelected = true;
                    if (charChosen === yourChar) {
                        
                        //have selected character move into attack zone
                        $("#" + yourChar).removeClass("charContainer").addClass("selectedCharContainer").appendTo("#yourChar");
                        
                        //assigns the value from charObject to charChosen
                        charChosen = charObject[charChosen];
                        console.log(charChosen);
                    }
                    if (charSelected === true) {
                        
                        //move remaining characters into defenders selection area
                        $(".charContainer").removeClass("charContainer").addClass("defenderContainer").appendTo("#defenders");
                    }
            }
            $(".defenderContainer").on("click", function () {
                if (defSelected === false) {
                    var yourOp = this.id;
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
        });
    
    
    //need to update health classes for the selected opponent
    $("#attack-btn").on("click", function () {
        if ( (charSelected !== true) || (defSelected !== true) ) {
            console.log("there's no opponent yet");
        }
        else if ( (charSelected === true) && (defSelected === true) ) {
    
            defChosen[0].hp -= charChosen[0].attack;
            $("#defender-area").find(".health").html(defChosen[0].hp);
    
    
            //charChosen attacks defChosen
            charChosen[0].attack += charChosen[0].attack;
            console.log(charChosen[0].attack + " this is the added attack power");
    
    
            if (defChosen[0].hp >= 0) {
                //defChosen counterattacks charChosen
                charChosen[0].hp -= defChosen[0].counterAttack;
                $(".selectedCharContainer").find(".health").html(charChosen[0].hp);
            }
            
        }
    
        if ( (defChosen[0].hp <= 0) ) {
            defSelected = false;
            $("#defender-area").remove();
        }
        else if (charChosen[0].hp <= 0) {
            $("#reset").show();
        }
    });
    
    
    //have character player attack (and increase attack power by attack power every time) have enemy counter attack automatically
    
    //after defender is defeated move back to selection area and gray out
    
    //select new enemy and move them to defender zone
    
    //if player character is defeated reset game
    
    
});
