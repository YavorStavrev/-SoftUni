function pirates(input) {

    let cities = {};
    let array = [];
    while (input[0] !== 'Sail') {

        let command = input.shift().split('||');
        let city = command[0];
        let population = Number(command[1]);
        let gold = Number(command[2]);

        let result = array.find(e => e.city === city);
        let index = array.indexOf(result);

        if (result) {
            array[index].population += population;
            array[index].gold += gold;
        } else {
            cities = { city, population, gold };
            array.push(cities);
        }
    }

    while (input[0] !== 'End') {
        let command = input.shift().split('=>');
        let currCommand = command.shift();
        switch (currCommand) {
            case 'Plunder':
                let cityName = command[0];
                let people = Number(command[1]);
                let gold = Number(command[2]);

                console.log(`${cityName} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                let result = array.find(e => e.city === cityName);
                let index = array.indexOf(result);

                array[index].population -= people;
                array[index].gold -= gold;

                if (array[index].population <= 0 || array[index].gold <= 0) {
                    array.splice(index, 1);
                    console.log(`${cityName} has been wiped off the map!`);
                }
                break;
            case 'Prosper':
                let town = command[0];
                let treasure = Number(command[1]);

                if (treasure < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    let result = array.find(e => e.city === town);
                    let index = array.indexOf(result);

                    array[index].gold += treasure;
                    console.log(`${treasure} gold added to the city treasury. ${town} now has ${array[index].gold} gold.`);
                }
                break;
        }
    }
    if (array.length === 0) {

        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {    

        console.log(`Ahoy, Captain! There are ${array.length} wealthy settlements to go to:`);
       
        array.forEach(t=> console.log(`${t.city} -> Population: ${t.population} citizens, Gold: ${t.gold} kg`));
    }
}
pirates(["Tortuga||345000||1250",

    "Santo Domingo||240000||630",

    "Havana||410000||1100",

    "Sail",

    "Plunder=>Tortuga=>75000=>380",

    "Prosper=>Santo Domingo=>180",

    "End"]);