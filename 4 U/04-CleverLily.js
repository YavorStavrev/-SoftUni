function CleverLily(input) {
    let age = Number(input[0]);
    let pricewashingmachine = Number(input[1]);
    let pricepertoy = Number(input[2]);
    let totalmoney = 0;
    let money = 10;
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0){
            totalmoney += money - 1;
            money += 10;
        }else {
            totalmoney += pricepertoy;
        }
    }
    if(totalmoney >= pricewashingmachine){
        let moneyleft = totalmoney - pricewashingmachine;
        console.log(`Yes! ${moneyleft.toFixed(2)}`);
    }else if(totalmoney < pricewashingmachine){
        let need = pricewashingmachine - totalmoney;
        console.log(`No! ${need.toFixed(2)}`);
    }
}
CleverLily(['2', '170', '6']);
