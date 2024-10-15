function OBN(input){
    let firstnumber = Number(input[0]);
    let secondnumber = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let evenOrOdd = '';

    switch(operator){
        case '+':
            result = firstnumber + secondnumber;
            if(result % 2 === 0){
                evenOrOdd = 'even';
            }else {
                evenOrOdd = 'odd';
            }
            console.log(`${firstnumber} ${operator} ${secondnumber} = ${result} - ${evenOrOdd}`);
            break;
        case '-':
            result = firstnumber - secondnumber;
            if(result % 2 === 0){
                evenOrOdd = 'even';
            }else {
                evenOrOdd = 'odd';
            }
            console.log(`${firstnumber} ${operator} ${secondnumber} = ${result} - ${evenOrOdd}`);
            break;
        case '*':
            result = firstnumber * secondnumber;
            if(result % 2 === 0){
                evenOrOdd = 'even';
            }else {
                evenOrOdd = 'odd';
            }
            console.log(`${firstnumber} ${operator} ${secondnumber} = ${result} - ${evenOrOdd}`);
            break;
        case '/':
            result = firstnumber / secondnumber;
            if(secondnumber === 0){
                console.log(`Cannot divide ${firstnumber} by zero`)
            }else {
                console.log(`${firstnumber} / ${secondnumber} = ${result.toFixed(2)}`);
            }
            break;
        case '%':
            result = firstnumber % secondnumber;
            if(secondnumber === 0){
                console.log(`Cannot divide ${firstnumber} by zero`)
            }else {
                console.log(`${firstnumber} % ${secondnumber} = ${result}`);
            }
    }
    
}
OBN(['10', '0', '%']);
