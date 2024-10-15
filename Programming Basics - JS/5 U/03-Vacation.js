function Vacation(input){
    let moneyForVacation = Number(input[0]);
    let startingMoney = Number(input[1]);
    let posledovatelniDays = 0;
    let totalDays = 0;
    let index = 2;
    let command = input[index];
    index++; 
    let newMoney = '';
    while(posledovatelniDays < 5){
        newMoney = Number(input[index]);
        index++;
        if(command === 'spend'){
            startingMoney -= newMoney;
            posledovatelniDays++;
            totalDays++;
            if(startingMoney < newMoney){
                startingMoney = 0;
            }
        }else if (command === 'save'){
            startingMoney += newMoney;
            totalDays++;
            posledovatelniDays = 0;
        }
        if(startingMoney >= moneyForVacation){
            console.log(`You saved the money for ${totalDays} days.`);
        }
        command = input[index];
        index++;

    }
    if(posledovatelniDays >= 5 || startingMoney < moneyForVacation){
        console.log("You can't save the money.");
        console.log(`${totalDays}`);
        return;
    }
}
Vacation(["2000",

"1000",

"spend",

"1200",

"save",

"2000"]);
