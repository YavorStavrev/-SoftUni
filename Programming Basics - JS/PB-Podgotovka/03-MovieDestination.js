function MovieDestination(input){
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);
    let totalSum = 0;
    switch(destination){
        case 'Dubai':
            if(season === 'Winter'){
                totalSum += days * 45000;
            }else if(season === 'Summer'){
                totalSum += days * 40000;
            }
            break;
        case 'Sofia':
            if(season === 'Winter'){
                totalSum += days * 17000;
            }else if(season === 'Summer'){
                totalSum += days * 12000;
            }
            break;
        case 'London':
            if(season === 'Winter'){
                totalSum += days * 24000;
            }else if(season === 'Summer'){
                totalSum += days * 20250;
            }
            break;
    }
    if(destination === 'Dubai'){
        totalSum = totalSum - (totalSum * 0.3);
    }else if(destination === 'Sofia'){
        totalSum = totalSum + (totalSum * 0.25);
    }
    if(budget >= totalSum){
        let leftMoney = budget - totalSum;
        console.log(`The budget for the movie is enough! We have ${leftMoney.toFixed(2)} leva left!`);
    }else {
        let needeMoney = totalSum - budget;
        console.log(`The director needs ${needeMoney.toFixed(2)} leva more!`);
    }
}
MovieDestination(['1500000','Sofia','Summer','13']);