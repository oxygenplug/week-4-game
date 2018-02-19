$(document).ready(function () {

    var hero;
    var enemy;



    var rey = {
        hp: 120,
        atk: 10,
        counterAtk: 7,
        isEnemy = true,
        isDefeated = false,
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


})    