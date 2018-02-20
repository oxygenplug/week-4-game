$(document).ready(function () {
// initialized two vars, hero and enemy. player's flirst click will set a character obj as the hero, second click with set character obj as enemy
    var hero;
    var enemy;

// set up character objs

     var rey = {
        hp: 120,
        atk: 10,
        counterAtk: 7,
        isEnemy: true,
        isDefeated: false,

        /* attack function. first checks to see if the character selected is an enemy. if it's an enemy, their attack type used will be the counter attack.
        if they are not the enemy, it means they are the hero and that they can use the regular attack that grows in power each time it is used */

        attack: function (enemy) {
            
            enemy.hp -= this.atk;

        },

        checkifDefeated: function() {
            if (hp == 0) {
                this.isDefeated = true;
            }     

        },

    };

    var vader = {
        hp: 80,
        atk: 18,
        counterAtk: 12,
        isEnemy: true,
        isDefeated: false,
        attack: function () {
            if (isEnemy) {
                hero.hp  = hero.hp - this.counterAtk;
            }

            else {
                enemy.hp = enemy.hp - this.atk; 
            };

        },
        checkifDefeated: function() {
            if (hp == 0) {
                this.isDefeated = true;
            }     

        },
    };

    var kylo = {
        hp: 100,
        atk: 11,
        counterAtk: 9,
        isEnemy: true,
        isDefeated: false,
        attack: function () {
            if (isEnemy) {
                hero.hp  = hero.hp - this.counterAtk;
            }

            else {
                enemy.hp = enemy.hp - this.atk; 
            };

        },
        checkifDefeated: function() {
            if (hp == 0) {
                this.isDefeated = true;
            }     

        },
    };

    var maul = {
        hp: 60,
        atk: 20,
        counterAtk: 15,
        isEnemy: true,
        isDefeated: false,
        attack: function () {
            if (isEnemy) {
                hero.hp  = hero.hp - this.counterAtk;
            }

            else {
                enemy.hp = enemy.hp - this.atk; 
            };

        },
        checkifDefeated: function() {
            if (hp == 0) {
                this.isDefeated = true;
            }     

        },
    };

    // click event for hero selection. clicking the button should assign the char obj to a var of either hero or enemy
    $("#rey-btn").on("click", function() {
        if (hero = undefined) {
            hero = rey;
            console.log(hi)
        }
        else {
            enemy = rey;
            rey.isEnemy = true;
        };
    })

    $("#kylo-btn").click(function() {
        if (hero = undefined) {
            hero = kylo;
        }
        else {
            enemy = kylo;
            kylo.isEnemy = true;
        };
    })

    $("#maul-btn").click(function() {
        if (hero = undefined) {
            hero = maul;
        }
        else {
            enemy = maul
            maul.isEnemy = true;
        };
    })

    $("#vader-btn").click(function() {
        if (hero = undefined) {
            hero = vader;
        }
        else {
            enemy = vader;
            vader.isEnemy = true;
        };
    })

})    