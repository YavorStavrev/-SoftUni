function PerfectNumber(num) {
    let isPerfect = checkIfPerfect(num);
   function checkIfPerfect(num){

    if (num <= 1) {
        return false;
    }
    
    let sum = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== 1 && i !== num / i) {
                sum += num / i;
            }
        }
    }
    
    return sum === num;
    }
    if(isPerfect === true){
        console.log("We have a perfect number!");
    }else{
        console.log("It's not so perfect.");
    }
}

PerfectNumber(6);
