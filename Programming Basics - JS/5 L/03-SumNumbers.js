function SumNumbers(input){
    let goalNumber = Number(input[0]);
    let sumOfNumbers = 0;
    let index = 1;
    let currentNumber = Number(input[index]);

    while(sumOfNumbers < goalNumber){
            sumOfNumbers += currentNumber;
            index++; 
            currentNumber = Number(input[index]);
    }
    console.log(sumOfNumbers);
}
SumNumbers(["20", "1", "2", "3", "4", "5", "6"]);