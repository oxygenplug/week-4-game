// made by Dan Garces
$(document).ready(function () {
    // constructor for characters so i dont have a bunch of objects I have to create manually
    function Character(hp, atk, counterAtk, name, imgURL) {
        this.hp = hp;
        this.atk = atk;
        this.counterAtk = counterAtk;
        this.isDefeated = false;
        this.name = name;
        this.imgURL = "./assets/images/" + imgURL;
        this.attack = function (enemy, isCounterAtk) {

            if (isCounterAtk) {
                enemy.takeDamage(this.counterAtk)
            }

            else {
                enemy.takeDamage(this.atk);
                enemy.attack(this, true);
            }



        };

        this.takeDamage = function (damage) {
            this.hp -= damage;
            if (this.hp <= 0) {
                this.hp = 0;
                this.isDefeated = true;

            }

        };
    }
    // creates the characters
    var createCharacters = function () {
        rey = new Character(130, 10, 4, "Rey", "rey.jpg");
        kylo = new Character(110, 11, 6, "Kylo Ren", "kyloRen.jpg");
        maul = new Character(70, 20, 12, "Darth Maul", "darthMaul.png");
        vader = new Character(90, 18, 7, "Darth Vader", "vader.jpg");
    };


    var rey;
    var kylo;
    var maul;
    var vader;

    createCharacters();

    // this part handles the entire "battle" sequence, such as dynamically displaying the player and current enemy's images, the hp information, etc

    function Battle() {
        //this counter is used to know when to display the victory screen
        this.totalDefeated = 0; 
        this.hero = null; 
        this.enemy = null;
        this.setHero = function (character) {
            this.hero = character;
        };
        this.setEnemy = function (character) {
            this.enemy = character;
        };
        //this is set up as a flag to use elsewhere
        this.isBattleOn = false;
        this.start = function () {
            this.displayCombatants();
            $("#attack-btn").on("click", this, this.heroAttack);

        };
        //loads the images for the character they player chooses to play as and the image for they choose as an oppponent
        this.displayCombatants = function () {
            console.log("here");
            $('#hero-img').attr('src', this.hero.imgURL);
            $('#enemy-img').attr('src', this.enemy.imgURL);
            this.displayHp();
            if (!this.isBattleOn) {
                this.toggleBattle();
            };
        };
        //toggles the battleground div 
        this.toggleBattle = function () {
            this.isBattleOn = !this.isBattleOn;
            $('#battleground').toggleClass("hidden");
        };

        this.heroAttack = function (event) {
            //calls in event and sets it to a new var because otherwise I was having a million issues with scoping 
            var thisBattle = event.data;
            thisBattle.hero.attack(thisBattle.enemy, false);
            thisBattle.displayHp();
            thisBattle.isBattleOver();
            // logic for setting the atk value for the player
            if (thisBattle.hero.atk <= 26) {
            thisBattle.hero.atk = thisBattle.hero.atk + 2;
            }
            else if (thisBattle.hero.atk > 26) {
                thisBattle.hero.atk = thisBattle.hero.atk - 1;
            };

        };
        // updates the hp values and renders them 
        this.displayHp = function () {
            $('#hero-hp').text(this.hero.hp);
            $('#enemy-hp').text(this.enemy.hp);

        };
        // checks to see if the battle is over, resets everything, and prevents user from attacking while there is no battle
        this.isBattleOver = function () {
            if (this.hero.isDefeated) {
                alert("YOU HAVE DIED. YOU ARE EXTREMELY DEAD. SORRY!");
                this.hero = null;
                this.enemy = null;
                createCharacters();
                this.toggleBattle();
                $("#attack-btn").off("click");
            }

            else if (this.enemy.isDefeated) {
             // I think the healing mechanic is more fun than the atk going up but ¯\_(ツ)_/¯   
             //   alert("Congrats! You defeated the enemy! The Force renews your strength...");
             //   this.hero.hp = this.hero.hp + 50;
                this.totalDefeated++;
                
                this.clearEnemy();

                // switch statement to hide enemy image/button after they are defeated to more easily keep track of remaining opponents
                switch(this.enemy.name) {
                    case "Darth Vader": 
                    $("img#vader-top-img").toggleClass("hidden");
                    $("#vader-btn").toggleClass("hidden");
                    break;

                    case "Kylo Ren": 
                    $("img#kylo-top-img").toggleClass("hidden");
                    $("#kylo-btn").toggleClass("hidden");
                    break;

                    case "Rey": 
                    $("img#rey-top-img").toggleClass("hidden");
                    $("#rey-btn").toggleClass("hidden");
                    break;

                    case "Darth Maul": 
                    $("img#maul-top-img").toggleClass("hidden");
                    $("#maul-btn").toggleClass("hidden");
                };
                this.enemy = null;
                if (this.totalDefeated == 3){
                    alert("You won the game! You murderer. Think about what you've done.");
                    location.reload();
                }
            }
        };

        this.clearEnemy = function () {
            $('#enemy-img').attr('src', "./assets/images/clear.png");
        }


    };

    // CURRENTLY NOT WORKING
    var battle = new Battle();


    // click event for hero selection. clicking the button should assign the char  to a var of either hero or enemy
    $("#rey-btn").on("click", function () {
        if (!battle.hero) {
            battle.setHero(rey);
        }
        else {
            battle.setEnemy(rey);
            battle.start();

        };
    })

    $("#kylo-btn").on("click", function () {
        if (!battle.hero) {
            battle.setHero(kylo);
        }
        else {
            battle.setEnemy(kylo);
            battle.start();

        };
    })

    $("#maul-btn").on("click", function () {
        if (!battle.hero) {
            battle.setHero(maul);
        }
        else {
            battle.setEnemy(maul);
            battle.start();

        };
    })

    $("#vader-btn").on("click", function () {
        if (!battle.hero) {
            battle.setHero(vader);

        }
        else {
            battle.setEnemy(vader);
            battle.start();
        };
    })
})    