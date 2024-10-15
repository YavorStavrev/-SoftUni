function GodzillavsKong(input) {
    let budget = Number(input[0]);
    let statist = Number(input[1]);
    let priceobleklo = Number(input[2]);
    let dekor = budget * 0.1;
    let obleklo = statist * priceobleklo;
    if(statist > 150) {
        obleklo *= 0.9;
    }
    let price = dekor + obleklo;

    
    if(price > budget) {   
        let money = price - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${money.toFixed(2)} leva more.`);
    }else if(price <= budget) {
        let moneyleft = budget - price;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyleft.toFixed(2)} leva left.`);

    }

}
GodzillavsKong(["100000", "120", "170"]);
