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

    // this part would handle the entire "battle" set up sequence, such as dynamically displaying the player and current enemy's images

    function Battle() {
        this.totalDefeated = 0;
        this.hero = null;
        this.enemy = null;
        this.setHero = function (character) {
            this.hero = character;
        };
        this.setEnemy = function (character) {
            this.enemy = character;
        };

        this.isBattleOn = false;
        this.start = function () {
            this.displayCombatants();
            $("#attack-btn").on("click", this, this.heroAttack);

        };
        this.displayCombatants = function () {
            console.log("here");
            $('#hero-img').attr('src', this.hero.imgURL);
            $('#enemy-img').attr('src', this.enemy.imgURL);
            this.displayHp();
            if (!this.isBattleOn) {
                this.toggleBattle();
            };
        };

        this.toggleBattle = function () {
            this.isBattleOn = !this.isBattleOn;
            $('#battleground').toggleClass("hidden");
        };

        this.heroAttack = function (event) {
            var thisBattle = event.data;
            thisBattle.hero.attack(thisBattle.enemy, false);
            thisBattle.displayHp();
            thisBattle.isBattleOver();
            if (thisBattle.hero.atk <= 26) {
            thisBattle.hero.atk = thisBattle.hero.atk + 2;
            }
            else if (thisBattle.hero.atk > 26) {
                thisBattle.hero.atk = thisBattle.hero.atk - 1;
            };

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
             //   alert("Congrats! You defeated the enemy! The Force renews your strength...");
             //   this.hero.hp = this.hero.hp + 50;
                this.totalDefeated++;
                
                this.clearEnemy();
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