function performOperations(startingNumber, op1, op2, op3, op4, op5) {
   
    let number = parseFloat(startingNumber);
    
    
    const operations = {
        'chop': (num) => num / 2,
        'dice': (num) => Math.sqrt(num),
        'spice': (num) => num + 1,
        'bake': (num) => num * 3,
        'fillet': (num) => num * 0.8
    };

    
    number = operations[op1](number);
    console.log(number);

    number = operations[op2](number);
    console.log(number);

    number = operations[op3](number);
    console.log(number);

    number = operations[op4](number);
    console.log(number);

    number = operations[op5](number);
    console.log(number);
}


performOperations("32", "chop", "chop", "chop", "chop", "chop");
