function simpleCalculator(numOne, numTwo, operator) {
    switch (operator) {
        case 'multiply':
            let sum = (a, b) => a * b;
            console.log(sum(numOne, numTwo));
            break;
        case 'divide':
            let sum1 = (a, b) => a / b;
            console.log(sum1(numOne, numTwo));
            break;
        case 'add':
            let sum2 = (a, b) => a + b;
            console.log(sum2(numOne, numTwo));
            break;
        case 'subtract':
            let sum3 = (a, b) => a - b;
            console.log(sum3(numOne, numTwo));
            break;
    }
}
simpleCalculator(5,

    5,

    'multiply');