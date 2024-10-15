function AccauntBalance(input) {
    let index = 0;
    let addmoney = input[index];
    let sum = 0;
    while (addmoney !== "NoMoreMoney") {
        let currentaddedmoney = Number(addmoney);
        if (currentaddedmoney < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${currentaddedmoney.toFixed(2)}`);
        sum += currentaddedmoney;
        
        index++;
        addmoney = input[index];
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}
AccauntBalance(["5.51",

    "69.42",

    "100",

    "NoMoreMoney"]);
