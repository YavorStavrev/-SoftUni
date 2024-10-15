function toyShop(input){
    let priceVac = Number(input[0]);
    let brPuzel = Number(input[1]);
    let brDool = Number(input[2]);
    let brMechki = Number(input[3]);
    let brMinioni = Number(input[4]);
    let brKam = Number(input[5]);

    let allToy = (brPuzel + brDool + brMechki + brMinioni + brKam);
    let collectPrice = ((brPuzel * 2.6) + (brDool * 3) 
        + (brMechki * 4.1) + (brMinioni * 8.2) + (brKam * 2));
    collectPrice = collectPrice - (collectPrice * 0.1);


    if(allToy >= 50) {
        collectPrice = collectPrice - (collectPrice * 0.25);
    }

    if(collectPrice >= priceVac) {
        console.log(`Yes! ${(collectPrice - priceVac).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(priceVac - collectPrice).toFixed(2)} lv needed.`);
    }
}

toyShop(["320", "8", "2", "5", "5", "1"]);