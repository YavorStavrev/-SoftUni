function GoldMine(input){
    let numberOfLocations = Number(input[0]);
    let position = 1;

    for(let i = 1; i <= numberOfLocations; i++){
        let sredenDobiv = 0;

        let ochakvanSredenDobiv = Number(input[position]);

        position++;
        let daysForWork = Number(input[position]);

        for(let j = 0; j < daysForWork; j++){
            position++;
            let dobiv = Number(input[position]);
            sredenDobiv  += dobiv;
        }

        sredenDobiv = sredenDobiv / daysForWork;

        if(sredenDobiv >= ochakvanSredenDobiv){
            console.log(`Good job! Average gold per day: ${sredenDobiv.toFixed(2)}.`);
        }else {
            let needGold = ochakvanSredenDobiv - sredenDobiv;
            console.log(`You need ${needGold.toFixed(2)} gold.`);
        }
    }
}