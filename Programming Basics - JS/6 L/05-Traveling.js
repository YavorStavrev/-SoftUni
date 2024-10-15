function Traveling(input){
    let index = 0;
    let command = input[index];
    index++;
    while(command !== 'End'){
        let destination = command;
        let budget = Number(input[index]);
        index++;
        let savedMoney = 0;
        while(savedMoney < budget){
            let addedMoney = Number(input[index]);
            index++;
            savedMoney += addedMoney;
        }
     
            console.log(`Going to ${destination}!`);
        command = input[index];
        index++;
    }
    if(command === 'End'){
        return;
    }
}
Traveling(["Greece",

"1000",

"200",

"200",

"300",

"100",

"150",

"240",

"Spain",

"1200",

"300",

"500",

"193",

"423",

"End"]);
