function manageHeroes(commands) {
    let heroes = {};

    for (let command of commands) {
        let [action, heroName, spellName] = command.split(' ');

        if (action === 'End') {
            break;
        } else if (action === 'Enroll') {
            if (!heroes.hasOwnProperty(heroName)) {
                heroes[heroName] = [];
            } else {
                console.log(`${heroName} is already enrolled.`);
            }
        } else if (action === 'Learn') {
            if (!heroes.hasOwnProperty(heroName)) {
                console.log(`${heroName} doesn't exist.`);
            } else if (heroes[heroName].includes(spellName)) {
                console.log(`${heroName} has already learnt ${spellName}.`);
            } else {
                heroes[heroName].push(spellName);
            }
        } else if (action === 'Unlearn') {
            if (!heroes.hasOwnProperty(heroName)) {
                console.log(`${heroName} doesn't exist.`);
            } else if (!heroes[heroName].includes(spellName)) {
                console.log(`${heroName} doesn't know ${spellName}.`);
            } else {
                heroes[heroName] = heroes[heroName].filter(spell => spell !== spellName);
            }
        }
    }

    console.log("Heroes:");
    Object.entries(heroes).forEach(([hero, spells]) => {
        console.log(`== ${hero}: ${spells.join(', ')}`);
    });
}
manageHeroes([
    'Enroll Stefan',
    'Enroll Peter',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn John ItShouldWork',
    'Unlearn George Dispel',
    'Unlearn Stefan ItShouldWork',
    'End'
]);