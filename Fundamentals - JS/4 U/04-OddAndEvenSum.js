function oddAndEvenSum(num){
    let str = num.toString();
    let oddSum = 0;
    let evenSum = 0;
    for(let elem of str){
        if(elem % 2 === 0){
            evenSum += Number(elem);
        }else {
            oddSum += Number(elem);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);