function SkiTrip(input){
    let days = Number(input[0]);
    let room = input[1];
    let grade = input[2];
    let nights = days - 1;
    let price = 0;
    switch(room){
        case 'room for one person':
            price = nights * 18;
        break;
        case 'apartment':
            price = nights * 25;
            if(days < 10){
                price *= 0.7;
            }else if (nights <= 15){
                price *= 0.65;
            }else if(nights > 15){
                price *= 0.5;
            }
        break;
        case 'president apartment':
            price = nights * 35;
            if(nights < 10){
                price *= 0.9;
            }else if(nights <= 15){
                price *= 0.85;
            }else if(nights > 15){
                price *= 0.8;
            }
        break;
    }
    if(grade === 'positive'){
        price = price + (price * 0.25);
    }else if(grade === 'negative'){
        price = price - (price * 0.1);
    }
    console.log(price.toFixed(2));
}
SkiTrip(['14', 'apartment', 'positive']);
