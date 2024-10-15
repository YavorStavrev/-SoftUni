function FoodForPets(input){
    let days = Number(input[0]);
    let totalFood = Number(input[1]);
    let totalBiscuits = 0;
    let totalDog = 0;
    let totalCat = 0;
    let allFood = 0;
    for(let i = 2; i < (days * 2) + 1; i++){
        let eatenFood = 0;
        let dogFoodPerDay = Number(input[i]);
        i++;
        let catFoodPerDay = Number(input[i]);
        eatenFood = dogFoodPerDay + catFoodPerDay;
        allFood += eatenFood;
        totalDog += dogFoodPerDay;
        totalCat += catFoodPerDay;
       
        switch(i){
            case 7: totalBiscuits += 0.1 * (dogFoodPerDay + catFoodPerDay);break;
            case 13:totalBiscuits += 0.1 * (dogFoodPerDay + catFoodPerDay);break;
            case 19:totalBiscuits += 0.1 * (dogFoodPerDay + catFoodPerDay);break;
            case 25:totalBiscuits += 0.1 * (dogFoodPerDay + catFoodPerDay);break;
            case 31:totalBiscuits += 0.1 * (dogFoodPerDay + catFoodPerDay);break;
            case 37:totalBiscuits += 0.1 * (dogFoodPerDay + catFoodPerDay);break;
            case 43:totalBiscuits += 0.1 * (dogFoodPerDay + catFoodPerDay);break;
            case 49:totalBiscuits += 0.1 * (dogFoodPerDay + catFoodPerDay);break;
            case 55:totalBiscuits += 0.1 * (dogFoodPerDay + catFoodPerDay);break;
            case 61:totalBiscuits += 0.1 * (dogFoodPerDay + catFoodPerDay);break;
            
        }

    }
    let percentEatenFood = allFood / totalFood * 100;
    let percentDogFood = totalDog / allFood * 100;
    let percentCatFood = totalCat / allFood * 100;
    console.log(`Total eaten biscuits: ${Math.round(totalBiscuits)}gr.`);
    console.log(`${percentEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentDogFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentCatFood.toFixed(2)}% eaten from the cat.`);
}
FoodForPets(['3', '500', '100', '30', '110', '25', '120', '35']);