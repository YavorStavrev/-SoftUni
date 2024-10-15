function blackFlag(arr) {
    let days = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let expectedPlunder = Number(arr[2]);
    let counterOfDays = 1;
    let totalPlunder = 0;
    for(let i = 0; i < days; i++){
        let addedPlunder = dailyPlunder;
        if(counterOfDays % 3 === 0){
            addedPlunder = addedPlunder + addedPlunder * 1/2;
        }
        totalPlunder += addedPlunder;
        if(counterOfDays % 5 === 0){
            totalPlunder = totalPlunder - totalPlunder * 3 / 10;
        }
        
        counterOfDays++;
    }
    if(totalPlunder >= expectedPlunder){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }else{
        let percentage = totalPlunder / expectedPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["10",

"20",

"380"]);