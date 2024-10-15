function Tennis(input){
    let priceRacket = Number(input[0]);
    let numberOfRackets = Number(input[1]);
    let numberOfShoes = Number(input[2]);
    let priceShoes = priceRacket / 6;
    let ekipirovka = ((priceRacket * numberOfRackets) + (priceShoes * numberOfShoes)) * 0.2;
    let totalSum = ekipirovka + (priceRacket * numberOfRackets) + (priceShoes * numberOfShoes);
    let djokovic = totalSum / 8;
    let firm = totalSum * 7 / 8;
    console.log(`Price to be paid by Djokovic ${Math.floor(djokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(firm)}`);
}
Tennis(['100','5','10']);
