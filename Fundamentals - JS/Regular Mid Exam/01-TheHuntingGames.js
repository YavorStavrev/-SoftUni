function theHuntingGames(input){
    let daysOfAdventure = input[0];
    let numOfPlayers = input[1];
    let groupsEnergy = input[2];
    let waterPerDayPerPerson = input[3];
    let foodPerDayPerPerson = input[4];
    let totalWater = waterPerDayPerPerson * numOfPlayers * daysOfAdventure;
    let totalFood = foodPerDayPerPerson * numOfPlayers * daysOfAdventure;
    let daysCounter = 1;
    for(let i = 5; i < input.length; i++){
        groupsEnergy -= input[i];
        if(groupsEnergy <= 0){
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            return;
        }
        if(daysCounter % 2 === 0){
            groupsEnergy = groupsEnergy + groupsEnergy * 0.05;
            totalWater = totalWater - totalWater * 0.3;
        }
        if(daysCounter % 3 === 0){
            totalFood = totalFood - totalFood / numOfPlayers;
            groupsEnergy = groupsEnergy + groupsEnergy * 0.1;
        }
        daysCounter++;
    }
    console.log(`You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(2)} energy!`);
}

theHuntingGames([10,
    7,
    5035.5,
    11.3,
    7.2,
    942.3,
    500.57,
    520.68,
    540.87,
    505.99,
    630.3,
    784.20,
    321.21,
    456.8,
    330
    ]);