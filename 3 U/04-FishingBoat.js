function FishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);
    let price = 0;
    switch(season){
        case 'Spring': price = 3000;break;
        case 'Summer': 
        case 'Autumn': price = 4200;break;
        case 'Winter': price = 2600;break;
    }
    if(fishers <= 6){
        price = price - (0.1 * price);
    }else if(fishers <= 11){
        price = price - (0.15 * price);
    }else if(fishers > 11){
        price = price - (0.25 * price);
    }
    if(fishers % 2 === 0 && season != 'Autumn'){
        price = price - (0.05 * price);
    }
    if(budget >= price){
        let left = budget - price;
        console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
    }else if(budget < price){
        let need = price - budget;
        console.log(`Not enough money! You need ${need.toFixed(2)} leva.`);
    }
}
FishingBoat(["3000", "Summer", "10"]);