function Coins(input){
    let coins = [2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];
    let change = Number(input[0]);
    let numberOfCoins = 0;
    
    while (change > 0){
        let index = 0;

        let newCoin = Number(coins[index]);
        index++;
        let count = 0;
        count = Math.floor(change / newCoin);
        numberOfCoins += count;
        change = change - (count * newCoin);
    }
    console.log(numberOfCoins);
}
Coins(['1.23']);
