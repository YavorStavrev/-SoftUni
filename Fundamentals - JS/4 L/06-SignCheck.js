function signCheck(numOne, numTwo, numThree) {

    function firstAndSecondMultiply(a,b){
        return a * b;
    }
    let firstAndSecondResult = firstAndSecondMultiply(numOne, numTwo);
    let finalResult = firstAndSecondResult * numThree;
    if(finalResult < 0){
        console.log('Negative');
    }else{
        console.log('Positive');
    }
}
signCheck(-5,

    1,
    
    1);