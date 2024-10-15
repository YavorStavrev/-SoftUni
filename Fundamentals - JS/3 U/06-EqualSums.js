function equalSums(arr){
        let leftSum = 0;
        let rightSum = 0;
        let k;
    for(let i = 0; i < arr.length; i++){
        for(k = i + 1; k < arr.length; k++){
            rightSum += arr[k];
            for(let j = i - 1; j >= 0; j--){
                if(j < 0){
                    break;
                }
                leftSum += arr[j];
            }
        }
        if(k >= arr.length){
            console.log('no');
            return;
        }
        if(leftSum === rightSum){
            console.log(i);
            return;
        }
        leftSum = 0;
        rightSum = 0;
    }
    
}
equalSums([1, 2, 3, 3]);    