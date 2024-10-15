function BeerAndChips(input){
    let name = input[0];
    let budget = Number(input[1]);
    let numberOfBeers = Number(input[2]);
    let numberOfCrisps = Number(input[3]);
    let totalPriceBeers = numberOfBeers * 1.2;
    let pricePerCrisps = 0.45 * totalPriceBeers;
    let totalPriceCrisps = Math.ceil(pricePerCrisps * numberOfCrisps);
    let totalPrice = totalPriceBeers + totalPriceCrisps;
    if(budget >= totalPrice){
        let leftMoney = budget - totalPrice;
        console.log(`${name} bought a snack and has ${leftMoney.toFixed(2)} leva left.`);
    }else {
        let neededMoney = totalPrice - budget;
        console.log(`${name} needs ${neededMoney.toFixed(2)} more leva!`);
    }
}
BeerAndChips([]);