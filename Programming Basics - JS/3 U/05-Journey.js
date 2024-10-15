function Journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let destination
    let typeofvacation
    if(budget <= 100){
        destination = 'Bulgaria';
        if(season === 'summer'){
            price = 0.3 * budget;
            typeofvacation = 'Camp';
        }else if(season === 'winter'){
            price = 0.7 * budget;
            typeofvacation = 'Hotel';
        }
    }else if(budget <= 1000){
        destination = 'Balkans';
        if(season === 'summer'){
            price = 0.4 * budget;
            typeofvacation = 'Camp';
        }else if(season === 'winter'){
            price = 0.8 * budget;
            typeofvacation = 'Hotel';
        }
    }else {
        destination = 'Europe';
        price = 0.9 * budget;
        typeofvacation = 'Hotel';
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeofvacation} - ${price.toFixed(2)}`);
}
Journey(["50", "summer"]);
