function GoldMine(input){
    let numberOfLocations = Number(input[0]);
    for(let i = 1; i <= numberOfLocations; i++){
        let sredenDobiv = 0;
        let ochakvanSredenDobiv = Number(input[i]);
        i++;
        let daysForWork = Number(input[i]);
        i++;
        for(let j = i; j < daysForWork * 2; j++){
            
            let dobiv = Number(input[j]);
            sredenDobiv  += dobiv;
        }
        sredenDobiv = sredenDobiv / daysForWork;
        if(sredenDobiv >= ochakvanSredenDobiv){
            console.log(`Good job! Average gold per day: ${sredenDobiv.toFixed(2)}.`);
        }else {
            let needGold = ochakvanSredenDobiv - sredenDobiv;
            console.log(`You need ${needGold} gold.`);
        }
    }
}
GoldMine(['2','10','3','10','10','11','20','2','20','10']);