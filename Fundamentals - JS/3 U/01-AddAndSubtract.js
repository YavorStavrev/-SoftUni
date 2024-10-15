function addAndSubtract(input){
    let sumOriginal = 0;
    let sumNewArr = 0;
    let arr = [];
    for(let i = 0; i < input.length; i++){
        sumOriginal += input[i];
        if(input[i] % 2 === 0){
            input[i] += i;
            arr.push(input[i]);
        }else{
            input[i] -= i;
            arr.push(input[i]);   
        }
        sumNewArr += input[i];
    }
    console.log(arr);
    console.log(sumOriginal);
    console.log(sumNewArr);
}
addAndSubtract([5, 15, 23, 56, 35]);
