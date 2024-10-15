function equalArrays(arr, arr2){
    let sum = 0;
    let result = '';
    let result2 = '';
    for(let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);
        arr2[i] = Number(arr2[i]);
        if(arr[i] === arr2[i]){
            result += arr[i];
            result2 += arr2[i];
            sum += arr[i];
        }else{
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }
    if(result === result2){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['10','20','30'],

['10','20','30']);