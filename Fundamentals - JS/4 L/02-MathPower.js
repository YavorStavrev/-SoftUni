function mathPower(num1, num2){
    let sum = 1;
    for(let i = 0; i < num2; i++){
        sum *= num1;
    }
    console.log(sum);
}
mathPower(2, 8);