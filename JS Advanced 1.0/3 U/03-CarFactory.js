function carFactory(order) {
    let res = { 
        model: order.model, 
        engine: undefined, 
        carriage: undefined, 
        wheels: [] 
    }

    if(order.power <= 90){
        res.engine = {power: 90, volume: 1800};
    }else if(order.power <= 120){
        res.engine = {power: 120, volume: 2400};
    }else {
        res.engine = {power: 200, volume: 3500};
    }

    if(order.carriage === 'hatchback'){
        res.carriage = { type: 'hatchback', color: order.color };
    }else{
        res.carriage = { type: 'coupe', color: order.color };
    }
    if(order.wheelsize % 2 === 0){
        order.wheelsize = order.wheelsize - 1;
    }
    res.wheels = new Array(4).fill(order.wheelsize);
    return res;
}
let result = carFactory({
    model: 'VW Golf II',

    power: 90,

    color: 'blue',

    carriage: 'hatchback',

    wheelsize: 14
});

console.log(result);