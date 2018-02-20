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

    var rey = new Character(120, 10, 7, "Rey", "../images/rey.jpg");
    var kylo = new Character(100, 11, 9, "Kylo Ren", "../images/kyloRen.jpg");
    var maul = new Character(60, 20, 15, "Darth Maul", "../images/darthMaul.png");
    var vader = new Character(80, 18, 10, "Darth Vader", "../images/vader.jpg");


    function Battle(hero, enemy) {
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
    }

    var battle = new Battle(hero, enemy);
    battle.start();


    // click event for hero selection. clicking the button should assign the char obj to a var of either hero or enemy
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


    $("#attack-btn").on("click", function() {

    });


})    