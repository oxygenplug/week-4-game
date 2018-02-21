$(document).ready(function () {
    var hero;
    var enemy;

    function Character(hp, atk, counterAtk, name, imgURL) {
        this.hp = hp;
        this.atk = atk;
        this.counterAtk = counterAtk;
        this.isDefeated = false;
        this.name = "";
        this.imgURL = "";
        this.attack = function () {
            if (isEnemy) {
                hero.hp = hero.hp - this.counterAtk;
            }

            else {
                enemy.hp = enemy.hp - this.atk;
            };

        };
        this.checkifDefeated = function () {
            if (hp == 0) {
                this.isDefeated = true;
            }
        };
    }
// for some reason I can't get the name and imgURL to pass through. they come up as empty strings.
    var rey = new Character(120, 10, 7, "Rey", "../images/rey.jpg");
    var kylo = new Character(100, 11, 9, "Kylo Ren", "../images/kyloRen.jpg");
    var maul = new Character(60, 20, 15, "Darth Maul", "../images/darthMaul.png");
    var vader = new Character(80, 18, 10, "Darth Vader", "../images/vader.jpg");


    // this part would handle the entire "battle" set up sequence, such as dynamically displaying the player and current enemy's images

  /*  function Battle(left, right) {
        this.left = hero;
        this.right = enemy;
        this.start = function (left, right) {
            this.left = left;
            this.right = right;
            this.displayCombatants();

        },
            this.displayCombatants = function () {
                $('#left-img').attr('src', this.left.imgURL);
                $('#left-name').text(this.left.name)
                $('#right-img').attr('src', this.right.imgURL)
                $('#right-name').text(this.right.name)
            }
    };  */

  /* CURRENTLY NOT WORKING
    var battle = new Battle(left, right);
    battle.start();
*/

    // click event for hero selection. clicking the button should assign the char  to a var of either hero or enemy
    $("#rey-btn").on("click", function () {
        if (!hero) {
            hero = rey;
            console.log(hero);
        }
        else {
            enemy = rey;
           
        };
    })

    $("#kylo-btn").on("click", function () {
        if (!hero) {
            hero = kylo;
            console.log(hero);
        }
        else {
            enemy = kylo;
           
        };
    })

    $("#maul-btn").on("click", function () {
        if (!hero) {
            hero = maul;
            console.log(hero);
        }
        else {
            enemy = maul;
        
            console.log(enemy);
        };
    })

    $("#vader-btn").on("click", function () {
        if (!hero) {
            hero = vader;
            console.log(hero);
        }
        else {
            enemy = vader;
        };
    })

/* calls the attack function from the Character constructor. this function first checks to see
 if a character is the player or an enemy then peforms either a attack or counter attack
 and subtracts that from the other character's hp pool */
    $("#attack-btn").on("click", function() {
        Character.attack();
    });


})    