function orders(str, num){
    switch(str){
        case 'coffee': console.log((num * 1.5).toFixed(2));break;
        case 'water': console.log((num * 1).toFixed(2));break;
        case 'coke': console.log((num * 1.4).toFixed(2));break;
        case 'snacks': console.log((num * 2).toFixed(2));break;
    }
}
orders("water", 5);