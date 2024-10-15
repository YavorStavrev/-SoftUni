function NewHouse(input){
    let flower = input[0];
    let numberflower = Number(input[1]);
    let budget = Number(input[2]);
    switch(flower){
        case 'Roses': let price = numberflower * 5;
            if(numberflower > 80){
                price = price - (0.1 * price);
            }
            if(budget >= price){
                let left = budget - price;
                console.log(`Hey, you have a great garden with ${numberflower} ${flower} and ${left.toFixed(2)} leva left.`);
            }else if(budget < price){
                let need = price - budget;
                console.log(`Not enough money, you need ${need.toFixed(2)} leva more.`);
            }
            break;

        case 'Dahlias':let price1 = numberflower * 3.8;
        if(numberflower > 90){
            price1 = price1 - (0.15 * price1);
        }
        if(budget >= price1){
            let left = budget - price1;
            console.log(`Hey, you have a great garden with ${numberflower} ${flower} and ${left.toFixed(2)} leva left.`);
        }else if(budget < price1){
            let need = price1 - budget;
            console.log(`Not enough money, you need ${need.toFixed(2)} leva more.`);
        }
        break;
        case 'Tulips':let price2 = numberflower * 2.8;
        if(numberflower > 80){
            price2 = price2 - (0.15 * price2);
        }
        if(budget >= price2){
            let left = budget - price2;
            console.log(`Hey, you have a great garden with ${numberflower} ${flower} and ${left.toFixed(2)} leva left.`);
        }else if(budget < price2){
            let need = price2 - budget;
            console.log(`Not enough money, you need ${need.toFixed(2)} leva more.`);
        }
        break;
        case 'Narcissus':let price3 = numberflower * 3;
        if(numberflower < 120){
            price3 = price3 + (0.15 * price3);
        }
        if(budget >= price3){
            let left = budget - price3;
            console.log(`Hey, you have a great garden with ${numberflower} ${flower} and ${left.toFixed(2)} leva left.`);
        }else if(budget < price3){
            let need = price3 - budget;
            console.log(`Not enough money, you need ${need.toFixed(2)} leva more.`);
        }
        break;
        case 'Gladiolus':let price4 = numberflower * 2.5;
        if(numberflower < 80){
            price4 = price4 + (0.2 * price4);
        }
        if(budget >= price4){
            let left = budget - price4;
            console.log(`Hey, you have a great garden with ${numberflower} ${flower} and ${left.toFixed(2)} leva left.`);
        }else if(budget < price4){
            let need = price4 - budget;
            console.log(`Not enough money, you need ${need.toFixed(2)} leva more.`);
        }
        break;
    }
}
NewHouse(["Roses", "20", "500"]);
