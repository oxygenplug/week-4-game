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

    // click event for hero selection
    $("#rey-btn").click(function() {
        if (hero = undefined) {
            hero = rey;
        }
        else {
            enemy = rey;
        };
    })

    $("#kylo-btn").click(function() {
        if (hero = undefined) {
            hero = kylo;
        }
        else {
            enemy = kylo;
        };
    })

    $("#maul-btn").click(function() {
        if (hero = undefined) {
            hero = maul;
        }
        else {
            enemy = maul;
        };
    })

    $("#vader-btn").click(function() {
        if (hero = undefined) {
            hero = vader;
        }
        else {
            enemy = vader;
        };
    })

})    