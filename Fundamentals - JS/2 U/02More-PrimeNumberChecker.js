function PrimeNumberChecker(number){
    if(number === 2 || number === 3 || number === 5 || number === 7){
        console.log('true');
        return;
    }
    if(number % 2 === 0 || number % 3 === 0 || number === 1 || number === 0 || number % 5 === 0 || number % 7 === 0){
        console.log('false');
    }else {
        console.log('true');
    }
    
}
PrimeNumberChecker(7);