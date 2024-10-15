function factorialDivision(first, second){
    let firstFactorial = calculateFactorial(first);
    let secondFactorial = calculateFactorial(second);

     function calculateFactorial(num){
        let factorial = 1;
        while (num > 1){
            factorial *= num;
            num--;
        }
        return factorial
     }
     console.log((firstFactorial / secondFactorial).toFixed(2));
}
factorialDivision(5, 2);