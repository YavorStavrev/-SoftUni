function carWash(arr){
    let value = 0;
    for(let elem of arr){
        switch(elem){
            case 'soap':
                value += 10;
                break;
            case 'water':
                value += value * 0.2;
                break;
            case 'vacuum cleaner':
                value += value * 0.25;
                break;
            case 'mud':
                value -= value * 0.1;
                break;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap',

'water']);