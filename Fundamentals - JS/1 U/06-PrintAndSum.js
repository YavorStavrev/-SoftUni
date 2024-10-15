function PrintAndSum(num, num2){
    let sum = 0;
    let allNums = '';
    for(let i = num; i <= num2; i++){
        allNums += i + ' ';
        sum += i;
    }
    console.log(allNums);
    console.log(`Sum: ${sum}`);
}
PrintAndSum(5, 10);