function Calculator(number, operator, number2){
    let sum = 0;
    switch(operator){
        case '+':
        sum = number + number2;    
        console.log(sum.toFixed(2));
        break;
        case '-':
            sum = number - number2;    
        console.log(sum.toFixed(2));
        break;
        case '/':
            sum = number / number2;    
        console.log(sum.toFixed(2));
        break;
        case '*':
            sum = number * number2;    
        console.log(sum.toFixed(2));
        break;
    }
}
Calculator(5,

    '+',
    
    10);