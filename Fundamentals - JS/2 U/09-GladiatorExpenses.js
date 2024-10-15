function GladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    
    let expenses = 0;
    let shieldBreaks = 0;
    for(let i = 1; i <= lostFights; i++){
        
        if(i % 2 === 0){
            expenses += helmetPrice;
        }
        if(i % 3 === 0){
            expenses += swordPrice;
        }
        if(i % 6 === 0){
            expenses += shieldPrice;
            shieldBreaks++;
        }
        if(shieldBreaks === 2){
            expenses += armorPrice;
            shieldBreaks = 0;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
GladiatorExpenses();