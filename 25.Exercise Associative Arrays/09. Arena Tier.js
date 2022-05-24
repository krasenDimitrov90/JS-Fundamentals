function arenaTier(input) {
    let gladiators = {};
    let tokens = input.shift();

    while (tokens !== "Ave Cesar") {
        if (tokens.includes('->')) {
            let [gladiator , technique , skill] = tokens.split(' -> ')
            skill = +skill;
            if (!gladiators.hasOwnProperty(gladiator)) {
                gladiators[gladiator] = {};
                gladiators[gladiator]['totalSkill'] = 0;
            }
            if (!gladiators[gladiator].hasOwnProperty(technique)) {
                gladiators[gladiator][technique] = 0;
            }
            if (gladiators[gladiator][technique] < skill) {
                gladiators[gladiator][technique] = skill;
                gladiators[gladiator]['totalSkill'] += skill;
            }
        }else {
            let [gladiator1 , gladiator2] = tokens.split(' vs ')
            let gladiator1techniques = Object.keys(gladiators[gladiator1])
            let gladiator2techniques = Object.keys(gladiators[gladiator2])
            for (const tech1 of gladiator1techniques) {
                for (const tech2 of gladiator2techniques) {
                    if (tech1 === tech2 && tech1 !== "totalSkill" && tech2 !== "totalSkill") {
                        let gladiator1Skill = gladiators[gladiator1][tech1]
                        let gladiator2Skill = gladiators[gladiator2][tech2]
                        if (gladiator1Skill > gladiator2Skill) {
                            delete gladiators[gladiator2]
                        }else {
                            delete gladiators[gladiator1]
                        }
                    }
                }
            }
        }

        tokens = input.shift();
    }

    let sortedGladiators = Object.entries(gladiators)
    for (const glad of gladiators) {
        console.log(glad);
    }
    
}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
    
    )