$("#attack-btn").hide();
$(".gameText").hide();
$("#reset").hide();

$(document).ready( function() {
    var attack;
    var hp;
    var counterAttack;
    var charChosen;
    var charSelected = false;
    var defChosen;
    var defSelected = false;
   
    
    
    //select your character and then move other characters into the enemy section
    
        $(".charContainer").on("click", function () {
            $(".gameText").show();
            $("#selectChar").hide();
            if (charSelected === false) {
                var yourChar = this.id;
                charChosen = yourChar;
                charSelected = true;
                    if (charChosen === yourChar) {
                        $("#" + yourChar).removeClass("charContainer").addClass("selectedCharContainer").appendTo("#yourChar");
                    }
                    if (charSelected === true) {
                        $(".charContainer").removeClass("charContainer").addClass("defenderContainer").appendTo("#defenders");
                    }
            }
    
            $(".defenderContainer").on("click", function () {
                if (defSelected === false) {
                    var yourOp = this.id;
                    defChosen = yourOp;
                    defSelected = true;
                    if (defChosen === yourOp) {
                        $("#" + yourOp).appendTo("#opponent");
                        $("#attack-btn").show();
                    }
                }
            });
            
        });
    
    $("#attack-btn").on("click", function () {
        if ( (charSelected !== true) || (defSelected !== true) ) {
            console.log("there's no opponent yet");
        }
        else if ( (charSelected === true) && (defSelected === true) ) {
            console.log("i clicked the attack btn");
            
            // charChosen attacks defChosen
            // defChosen counterattacks charChosen
            // attack += attack; for charChosen
            // defChosen hp - attack
            // charChosen hp - attack
            //
            // if (defChosen hp = 0){
            //     defSelected = false;
            // }
            //
            // else if (charChosen hp = 0){
            //     reset game
            //     $("#reset").show();
            // }
            
        }
    
    });
    

    
    
    //generate hp attack power and counter attack power for all four characters
    
    //select character have selected character move into attack zone
    
    //select enemy and have selected enemy move into the defenders zone
    
    //have character player attack (and increase attack power by attack power every time) have enemy counter attack automatically
    
    //after defender is defeated move back to selection area and gray out
    
    //select new enemy and move them to defender zone
    
    //if player character is defeated reset game
    
    
});
