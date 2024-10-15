function condenseArrayToNumbers(arr){
    let condensed = [];
    let sum = 0;
    for(let i = 0; i < arr.length - 1; i++){
        condensed[i] = arr[i] + arr[i + 1];
        sum += condensed[i];
    }
    console.log(sum);
}
condenseArrayToNumbers([1]);