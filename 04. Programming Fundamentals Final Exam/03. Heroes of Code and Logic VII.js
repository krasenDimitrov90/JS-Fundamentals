function heroesHPAndMana(input) {

    let number = +input.shift();
    let heroes = [];
    for (let i = 0; i < number; i++) {
        let [name, HP, MP] = input
            .shift()
            .split(' ');
        let hero = {
            name,
            HP: +HP,
            MP: +MP
        }
        heroes.push(hero);
    }

    while (input[0] !== 'End') {
        let tokens = input
            .shift()
            .split(' - ');
        let command = tokens.shift();

        if (command === 'CastSpell') {
            let [heroName , manaNeded , spell] = tokens;
            manaNeded = +manaNeded;
            castSpell(heroName , manaNeded , spell)

        } else if (command === 'TakeDamage') {
            let [heroName , damage , attacker] = tokens;
            damage = +damage;
            takeDamage(heroName , damage , attacker)

        } else if (command === 'Recharge') {
            let [heroName , manaToAdd] = tokens;
            manaToAdd = +manaToAdd
            recharge(heroName , manaToAdd)

        } else if (command === 'Heal') {
            let [heroName , healthToAdd] = tokens;
            healthToAdd = +healthToAdd;
            healing(heroName , healthToAdd)
        }
    }

    for (let line of heroes) {
        let heroInfo = Object.values(line)
        let result = heroInfo[0] + '\n';
        result += '  ' +'HP: ' + heroInfo[1] + '\n';
        result += '  ' + 'MP: ' + heroInfo[2]
        console.log(result);
    }



    function castSpell(heroName , manaNeded , spell) {
        let index = heroes.findIndex(hero => hero.name === heroName);
        let currentMana = heroes[index].MP;
        if (currentMana < manaNeded ) {
            console.log(`${heroName} does not have enough MP to cast ${spell}!`);
        } else {
            let leftMana = currentMana - manaNeded;
            heroes[index].MP = leftMana;
            console.log(`${heroName} has successfully cast ${spell} and now has ${leftMana} MP!`);
        }
    }

    function takeDamage(heroName , damage , attacker) {
        let index = heroes.findIndex(hero => hero.name === heroName);
        let currentHP = heroes[index].HP;
        if (currentHP <= damage) {
            heroes.splice(index , 1);
            console.log(`${heroName} has been killed by ${attacker}!`);
        } else {
            heroes[index].HP -= damage;
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[index].HP} HP left!`);
        }
    }

    function recharge(heroName , manaToAdd) {
        let index = heroes.findIndex(hero => hero.name === heroName);
        let currentMP = heroes[index].MP;
        if (currentMP + manaToAdd > 200) {
            manaToAdd = 200 - currentMP;
            heroes[index].MP += manaToAdd;

            console.log(`${heroName} recharged for ${manaToAdd} MP!`);
        } else {
            heroes[index].MP += manaToAdd;
            console.log(`${heroName} recharged for ${manaToAdd} MP!`);
        }
    }

    function healing(heroName , healthToAdd) {
        let index = heroes.findIndex((hero => hero.name === heroName));
        let currentHP = heroes[index].HP;
        if (currentHP + healthToAdd > 100) {
            healthToAdd = 100 - currentHP;
            heroes[index].HP = 100
            console.log(`${heroName} healed for ${healthToAdd} HP!`);
        } else {
            heroes[index].HP += healthToAdd;
            console.log(`${heroName} healed for ${healthToAdd} HP!`);
        }
    }

}

heroesHPAndMana(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])