let heroes = require("./heroes");
let villains = require("./villains");


function randomPerson(guardList) {
    let num = Math.floor(Math.random() * guardList.length);
    return {
        guard: guardList[num],
        index: num
    };
};

function clear(time) {
    clearInterval(time);
};

function attack() {

        let timer1 = setInterval(function () {

            let hero = randomPerson(heroes);
            let villain = randomPerson(villains);


            if (villains.length === 0) {
                console.log(`Interval cleared..........--------------------------------`);
                clear(timer2);
                clear(timer1);
                console.log(`The Heroes won...`);
                console.log(`The Villains lost...`);
            } else {
                hero.guard.health = hero.guard.health - villain.guard.power;
                if (hero.guard.health <= 0) {
                    console.log(hero);
                    heroes = heroes.filter((el, index) => index !== hero.index);
                    console.log(`-----------------------${hero.guard.name} removed from Heroes---------------------`);
                    console.log(`${hero.guard.name} died...`);
                } else {
                    console.log(`${villain.guard.name} hit ${hero.guard.name} rest ${hero.guard.health} health...`);
                }
            }
        }, +(randomPerson(villains).guard.speed) * 1000);


        let timer2 = setInterval(function () {
            let hero = randomPerson(heroes);
            let villain = randomPerson(villains);

            if (heroes.length === 0) {
                console.log(`Interval cleared....-----------------------------------------`);
                clear(timer1);
                clear(timer2);
                console.log("The Villains won...");
                console.log("The Heroes lost...");
            } else {
                villain.guard.health = villain.guard.health - hero.guard.power;
                if (villain.guard.health <= 0) {
                    console.log(villain);
                    villains = villains.filter((el, index) => index !== villain.index);
                    console.log(`--------------------------------${villain.guard.name} removed from Villains------------------------`);
                    console.log(`${villain.guard.name} died...!`);
                } else {
                    console.log(`${hero.guard.name} hit ${villain.guard.name} rest ${villain.guard.health} health...!`);
                }
            }
        }, +(randomPerson(heroes).guard.speed) * 1000);

    }


attack();
