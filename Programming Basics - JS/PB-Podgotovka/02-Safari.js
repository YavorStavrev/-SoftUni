function Safari(input){
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percent = Number(input[3]);

    let minusPrice = (budget * percent) / 100;
    budget -= minusPrice;
    if(nights > 7){
        pricePerNight = pricePerNight - (pricePerNight * 0.05);
    }
    let totalSum = nights * pricePerNight;
    if(budget >= totalSum){
        let leftMoney = budget - totalSum;
        console.log(`Ivanovi will be left with ${leftMoney.toFixed(2)} leva after vacation.`);
    }else {
        let neededMoney = totalSum - budget;
        console.log(`${neededMoney.toFixed(2)} leva needed.`);
    }
}
Safari(['1000','10','Sunday','2']);