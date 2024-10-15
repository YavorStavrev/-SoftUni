function IntegerAndFloat(num,num1,num2){
    let sum = num + num1 + num2;
    if(sum % 1 === 0){
        console.log(`${sum} - Integer`);
    }else{
        console.log(`${sum} - Float`);
    }
}
IntegerAndFloat(9, 100, 1.1);