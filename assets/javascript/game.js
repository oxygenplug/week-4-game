$(document).ready(function () {

    function Character(hp, atk, counterAtk, name, imgURL) {
        this.hp = hp;
        this.atk = atk;
        this.counterAtk = counterAtk;
        this.isDefeated = false;
        this.name = name;
        this.imgURL = "./assets/images/" + imgURL;
        this.attack = function (enemy, isCounterAtk) {

            if (isCounterAtk) {
                this.enemy -= this.counterAtk;
            }

            else {
                this.enemy -= this.attack;
            }



        };
        this.checkifDefeated = function () {
            if (hp == 0) {
                this.isDefeated = true;
            }
        };
    }
    // for some reason I can't get the name and imgURL to pass through. they come up as empty strings.
    var rey = new Character(120, 10, 7, "Rey", "rey.jpg");
    var kylo = new Character(100, 11, 9, "Kylo Ren", "kyloRen.jpg");
    var maul = new Character(60, 20, 15, "Darth Maul", "darthMaul.png");
    var vader = new Character(80, 18, 10, "Darth Vader", "vader.jpg");


    // this part would handle the entire "battle" set up sequence, such as dynamically displaying the player and current enemy's images

    function Battle() {
        this.hero = null;
        this.enemy = null;
        this.setHero = function (character) {
            this.hero = character;
        };
        this.setEnemy = function (character) {
            this.enemy = character;
        };
        this.start = function () {
            this.displayCombatants();
            $("#attack-btn").on("click", this, this.heroAttack);

        };
        this.displayCombatants = function () {
            console.log("here");
            $('#hero-img').attr('src', this.hero.imgURL);
            $('#enemy-img').attr('src', this.enemy.imgURL);
            this.displayHp();
            this.toggleBattle();
        };
        this.toggleBattle = function () {
            $('#battleground').toggleClass("hidden");
        };

        this.heroAttack = function (event) {
            var thisBattle = event.data;
            thisBattle.hero.attack(this.enemy, false);
            thisBattle.displayHp();
        };

        this.displayHp = function () {
            $('#hero-hp').text(this.hero.hp);
            $('#enemy-hp').text(this.enemy.hp);
            
        };

    };

    // CURRENTLY NOT WORKING
    var battle = new Battle();


    // click event for hero selection. clicking the button should assign the char  to a var of either hero or enemy
    $("#rey-btn").on("click", function () {
        if (!battle.hero) {
            battle.setHero(rey);
            console.log(battle.hero);
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

    /* calls the attack function from the Character constructor. this function first checks to see
     if a character is the player or an enemy then peforms either a attack or counter attack
     and subtracts that from the other character's hp pool */



})    