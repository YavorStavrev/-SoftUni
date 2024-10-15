function Four(input) {
    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let pricepertoy = Number(input[2]);
    let sum = 0;
    let money = 10;
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            sum += money - 1;
            money += 10;
        } else {
            sum += pricepertoy;
        }
    }
    if (sum >= priceWashingMachine) {
        let left = sum - priceWashingMachine;
        console.log(`Yes! ${left.toFixed(2)}`);
    } else {
        let need = priceWashingMachine - sum;
        console.log(`No! ${need.toFixed(2)}`);
    }
}
Four(['10', '170', '6']);
