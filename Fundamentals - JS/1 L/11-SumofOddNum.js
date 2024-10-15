function SumofOddNum(number){
    let sum = 0;
    let counter = 0;
    let firstNumber = 1;
    while(counter < number){
        console.log(firstNumber);
        sum += firstNumber;
        firstNumber += 2;
        counter++;
    }
    console.log(`Sum: ${sum}`);
}
SumofOddNum(5);