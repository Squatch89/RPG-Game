$(document).ready( function() {
    var attack;
    var hp;
    var counterAttack;
    var charChosen;
    var charSelected = false;
    var defChosen;
    
    
    
    //select your character and then move other characters into the enemy section
    
        $(".charContainer").on("click", function () {
            if (charSelected === false) {
                var yourChar = this.id;
                charChosen = yourChar;
                charSelected = true;
                if (charChosen === yourChar) {
                    $("#" + yourChar).removeClass("charContainer").addClass("selectedCharContainer").appendTo("#yourChar");
                }
                console.log(charSelected);
                if (charSelected === true) {
                    $(".charContainer").appendTo("#defenders-area");
                }
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
