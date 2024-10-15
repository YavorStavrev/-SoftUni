function FruitMarket(input){
    let priceStrawBerry = Number(input[0]);
    let banana = Number(input[1]);
    let orange = Number(input[2]);
    let rasberry = Number(input[3]);
    let strawberry = Number(input[4]);
    let priceRasberry = priceStrawBerry / 2;
    let priceOrange = priceRasberry - (priceRasberry * 0.4);
    let priceBanana = priceRasberry - (priceRasberry * 0.8);
    let totalSum = (strawberry * priceStrawBerry) + (banana * priceBanana) + (orange * priceOrange) + (rasberry * priceRasberry);
    console.log(totalSum);
}
FruitMarket([]);
