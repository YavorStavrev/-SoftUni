function AmazingNumbers(number){
    number = number.toString();
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        sum += Number(number[i]);
    }
    sum = sum.toString();
    for(let k = 0; k < sum.length; k++){
        if(Number(sum[k]) === 9){
            console.log(`${number} Amazing? True`);
            return;
        }
    }
    console.log(`${number} Amazing? False`);
}
AmazingNumbers(1233);