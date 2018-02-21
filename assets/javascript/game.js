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
                console.log("defeated bitch");

            }

        };
    }
    // for some reason I can't get the name and imgURL to pass through. they come up as empty strings.
    var createCharacters = function () {
        rey = new Character(120, 10, 7, "Rey", "rey.jpg");
        kylo = new Character(100, 11, 9, "Kylo Ren", "kyloRen.jpg");
        maul = new Character(60, 20, 15, "Darth Maul", "darthMaul.png");
        vader = new Character(80, 18, 10, "Darth Vader", "vader.jpg");
    };


    var rey;
    var kylo;
    var maul;
    var vader;

    createCharacters();

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
            thisBattle.hero.attack(thisBattle.enemy, false);
            thisBattle.displayHp();
            thisBattle.isBattleOver();

        };

        this.displayHp = function () {
            console.log("hello displayHp")
            $('#hero-hp').text(this.hero.hp);
            $('#enemy-hp').text(this.enemy.hp);

        };

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
                alert("Congrats! You defeated the enemy!");
                this.enemy = null;
                this.clearEnemy();

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
})    