function SumofNumbers(input){
    let n = input[0];
    let sum = 0;
    for(let i = 0; i < n.length; i++){
        let currentNumber = Number(n[i]);

        sum += currentNumber;
    }
    console.log(`The sum of the digits is:${sum}`);
}
SumofNumbers(['2145432549']);

