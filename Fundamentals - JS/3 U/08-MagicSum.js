function magicSum(arr, num){
    for(let i = 0; i < arr.length; i++){
        for(let k = i + 1; k < arr.length; k++){
        if(arr[i] + arr[k] === num){
            console.log(`${arr[i]} ${arr[k]}`);
        }
        }
    }
}
magicSum([14,20,60,13,7,19,8],

    27);